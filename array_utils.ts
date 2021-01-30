export default class ArrayUtility
{
    findHighestNumber( theArray: any )
    {
        let result = null;

        if( theArray.length > 0 )
        {
            result = theArray[0];

            if( theArray.length > 1 && theArray[1] > result )
                result = theArray[1];
        }

        return result;
    }
}