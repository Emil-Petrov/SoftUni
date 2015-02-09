namespace GenericList
{
    using System.Linq;
    using System;
    [Version(1,5)]
    class GenericList<T> where T : IComparable
    {
        private const int DefaultSize = 16;
        private int _arraySize;
        private T[] _tArray;
        private int _lastIndex = 0;

        public GenericList()
            : this(DefaultSize)
        {
        }
        public GenericList(int size)
        {
            this._tArray = new T[size];
            _arraySize = size;
        }

        public T this[int index]
        {
            get
            {
                if (!CheckIndex(index))
                {
                    throw new IndexOutOfRangeException();
                }
                return this._tArray[index];
            }
            set
            {
                while (!CheckIndex(index))
                {
                    this._tArray = IncreaseCapacity(this._tArray);
                }
                if (index > this._lastIndex)
                {
                    this._lastIndex = index;
                }
                this._tArray[index] = value;
            }
        }
        public void Add(T element)
        {
            if (this._lastIndex >= this.Length())
            {
                this._tArray = IncreaseCapacity(this._tArray);
            }
            _lastIndex += 1;
            this[this._lastIndex] = element;
        }
        public void Remove(int index)
        {
            this._tArray[index] = default(T);
        }
        public void Clear()
        {
            this._tArray = new T[DefaultSize];
            this._lastIndex = 0;
            this._arraySize = DefaultSize;
        }
        public int Find(T element)
        {
            return Array.IndexOf(this._tArray, element);
        }
        public bool Contains(T value)
        {
            return this._tArray.Contains(value);
        }
        public T Min()
        {
            return this._tArray.Min();
        }
        public T Max()
        {
            return this._tArray.Max();
        }
        public int Length()
        {
            return this._tArray.Length;
        }
        private T[] IncreaseCapacity(T[] array)
        {
            this._arraySize *= 2;
            T[] newArray = new T[_arraySize];
            for (int i = 0; i < array.Length; i++)
            {
                if (CheckEmpty(i))
                {
                    continue;
                }
                newArray[i] = array[i];
            }
            return newArray;
        }
        private bool CheckIndex(int index)
        {
            return index < _arraySize;
        }
        private bool CheckEmpty(int index)
        {
            return this._tArray[index].Equals(default(T));
        }
    }
}
