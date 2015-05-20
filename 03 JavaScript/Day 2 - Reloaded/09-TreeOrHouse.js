function treeHouseCompare(arr){
    var houseArea = arr[0] * arr[0] * 2 / 6 + arr[0] * arr[0];
    var treeArea = (arr[1] * arr[1]) / 3 + Math.PI * ((arr[1]/3) * 2 * (arr[1]/3) * 2);
    if (houseArea < treeArea){
        return ('Tree/'+treeArea.toFixed(2));
    }
    else if(houseArea > treeArea){
        return ('House/'+houseArea.toFixed(2));
    }
    else{
        return 'None is greater both are equal';
    }
}
treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);