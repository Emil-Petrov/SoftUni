function biggerThanNeighbours(arr){
    if (arguments[1][arguments[0]]){
        if(arguments[1][arguments[0]-1] && arguments[1][arguments[0]+1]){
            if (arguments[1][arguments[0]]>arguments[1][arguments[0]+1] && arguments[1][arguments[0]] > arguments[1][arguments[0]-1]){
                return 'bigger';
            }
            return 'not bigger';
        }
        return 'only one neighbour';
    }
    return 'Invalid index';
}