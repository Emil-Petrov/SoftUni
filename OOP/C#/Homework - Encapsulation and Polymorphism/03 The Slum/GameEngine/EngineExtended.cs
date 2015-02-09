

namespace TheSlum.GameEngine
{
    using System;
    using System.Linq;

    class EngineExtended : Engine
    {
        private const int GameTurns = 4;

        public override void Run()
        {
            ReadUserInput();
            InitializeTimeoutItems();
            for (int i = 0; i < GameTurns; i++)
            {
                foreach (var character in characterList)
                {
                    if (character.IsAlive)
                    {
                        ProcessTargetSearch(character);
                    }
                }
                ProcessItemTimeout(timeoutItems);
            }
            PrintGameOutcome();
        }
        private void ReadUserInput()
        {
            string inputLine = Console.ReadLine();
            while (inputLine != "")
            {
                string[] parameters = inputLine.Split(
                    new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                ExecuteCommand(parameters);
                inputLine = Console.ReadLine();
            }
        }
        protected override void ExecuteCommand(string[] inputParams)
        {
            switch (inputParams[0])
            {
                case "status":
                    PrintCharactersStatus(characterList);
                    break;
                case "create":
                    CreateCharacter(inputParams);
                    break;
                case "add":
                    AddItem(inputParams);
                    break;
                default:
                    break;
            }
        }

        protected override void CreateCharacter(string[] inputParams)
        {
            string id = inputParams[2];
            int charX = int.Parse(inputParams[3]);
            int charY = int.Parse(inputParams[4]);
            Team team = (Team)Enum.Parse(typeof(Team), inputParams[5]);

            string role = inputParams[1];
            switch (role.ToLower())
            {
                case "mage":
                    characterList.Add(new Mage(id,charX,charY,team));
                    break;
                case "warrior":
                    characterList.Add(new Warrior(id,charX,charY,team));
                    break;
                case "healer":
                    characterList.Add(new Healer(id,charX,charY,team));
                    break;
                default:
                    break;
            }
        }

        protected new void AddItem(string[] inputParams)
        {
            string charId = inputParams[1];
            string itemClass = inputParams[2];
            string itemId = inputParams[3];

            switch (itemClass.ToLower())
            {
                case "injection":
                    characterList.Find(character => character.Id == charId).AddToInventory(new Injection(itemId));
                    break;
                case "pill":
                    characterList.Find(character => character.Id == charId).AddToInventory(new Pill(itemId));
                    break;
                case "shield":
                    characterList.Find(character => character.Id == charId).AddToInventory(new Shield(itemId));
                    break;
                case "axe":
                    characterList.Find(character => character.Id == charId).AddToInventory(new Axe(itemId));
                    break;
                default:
                    break;
            }
        }

        protected new void ProcessTargetSearch(Character currentCharacter)
        {
            var availableTargets = characterList
                .Where(t => IsWithinRange(currentCharacter.X, currentCharacter.Y, t.X, t.Y, currentCharacter.Range) && t.IsAlive).ToList();

            if (availableTargets.Count == 0)
            {
                return;
            }
            var target = currentCharacter.GetTarget(availableTargets);
            if (target == null)
            {
                return;
            }
            ProcessInteraction(currentCharacter, target);
        }

        protected new void PrintGameOutcome()
        {
            var charactersAlive = characterList.Where(c => c.IsAlive);
            var redTeamCount = charactersAlive.Count(x => x.Team == Team.Red);
            var blueTeamCount = charactersAlive.Count(x => x.Team == Team.Blue);
            if (redTeamCount == blueTeamCount)
            {
                Console.WriteLine("Tie game!");
            }
            else
            {
                string winningTeam = redTeamCount > blueTeamCount ? "Red" : "Blue";
                Console.WriteLine(winningTeam + " team wins the game!");
            }
            var aliveCharacters = characterList.Where(c => c.IsAlive);
            PrintCharactersStatus(aliveCharacters);
        }
    }
}
