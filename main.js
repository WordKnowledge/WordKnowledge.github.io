function powerOf(num)
{
  var counter = 0;
  while(num > 1)
  {
    num = num/10;
    if (num > 1)
    {
      counter = counter + 1;
    }
  }
  if (counter < 3)
  {
    return 0;
  }
  else if (counter < 6 && counter >= 3)
  {
    return 1;
  }
  else if(counter < 9 && counter >= 6)
  {
    return 2;
  }
  else if(counter < 12 && counter >= 9)
  {
    return 3;
  }
  else if(counter < 15 && counter >= 12)
  {
    return 4;
  }

}


function testResults (form)
{
    var numberRight = form.numberRight.value;
    var totalWordsOnPage = form.totalWords.value;
    var totalPages = form.totalPages.value;
    var check = true;
    if (numberRight < 0 || numberRight > 25)
    {
      alert("Please enter a number between 1 and 25 for step 2.");
      form.numberRight.value = "";
      check = false;
    }
    if (totalWordsOnPage < 0 || totalPages < 0)
    {
      alert("Please enter a number greater than zero for Step 3 and 4");
      form.totalWordsOnPage.value = "";
      form.totalPages.value = "";
      check = false;
    }
    if (totalPages == null || totalPages == "")
    {
      alert("Fill in every box with an appropriate value before submitting.");
      check = false;
    }
    if (check == true)
    {
      var percentKnown = numberRight/25;
      var totalWords = totalWordsOnPage*totalPages;
      var totalKnownWords = Math.floor(percentKnown*totalWords);
      var numberOfThousands = powerOf(totalKnownWords);
      var outputString = "";
      var storageArray = [];
      var counter = 0;
      for (i = numberOfThousands; i >= 0; i--)
      {

        if (i==numberOfThousands)
        {
           var toAdd = Math.floor(totalKnownWords/(Math.pow(1000,i)));
           //alert(toAdd);
        }
        else
        {
          var toAdd = Math.floor((totalKnownWords % storageArray[counter-1])/Math.pow(1000,i));
          //alert(toAdd);
        }

        if (i == numberOfThousands)
        {
          //alert(toAdd*Math.pow(1000,i));
          storageArray[counter] = toAdd*Math.pow(1000,i);
        }
        else
        {
          //alert(toAdd*Math.pow(1000,i) + storageArray[counter-1]);
          storageArray[counter] = toAdd*Math.pow(1000,i) + storageArray[counter-1];
        }
        //outputString += toAdd;
        // if (i != 0)
        // {
        //   outputString += ",";
        // }
        if (i != numberOfThousands)
        {
          if (toAdd/100 < 1 && toAdd/10 > 1)
          {
            outputString += "0";
            outputString += toAdd;
          }
          else if (toAdd/10<1)
          {
            outputString += "00";
            outputString += toAdd;
          }
          else
          {
            outputString += toAdd;
          }
        }
        else
        {
          outputString += toAdd;
        }
        if (i!=0)
        {
          outputString += ",";
        }
        counter++;
      }
      alert("You know " + outputString + " words!");
    }
}
