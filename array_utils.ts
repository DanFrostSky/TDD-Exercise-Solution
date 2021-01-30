export default class ArrayUtility
{
    findHighestNumber( theArray: any )
    {
        let result = null;

        if( theArray.length > 0 )
            result = theArray[0];

        return result;
    }
}