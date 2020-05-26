function result()
{

  var divi=String(document.getElementById("value1").value);
  var roll=Number(document.getElementById("value2").value);

  //for A division
  {  
    if(roll==9)
       {alert("No result for this roll number");}

     if(roll<9)
     { var a1=Number(11470);
     var doc_id =a1+ roll;}//Number(document.getElementById("value2").value);
    
     if(9<roll && roll<16)
     {var a1=Number(11469);
      var doc_id=a1+roll;
     }
     if(roll>15 && roll<51)
     {var a1=Number(11470);
      var doc_id =a1+ roll;}
    if(roll>50)
     {alert("No result for Rollno above 50");}


     //$('#q35 input').val() ; 
     var open = '&openfile="true"'; //Because my url is calling weblink, this is a parameter you can 
     var target = 'target="_self"'; // This sets the hyperlink to open in a new tab
     var openLink = doc_id + open; //Combining two tokens above for easier retrieval below
     var link = "<a "  + target + "href='https://www.vierp.in/ERPLearnerMarksGrade/result?ms=" + openLink +"'>Click Again</a>";
     document.getElementById("q34").innerHTML=link; //Insert your hyperlink into my Custom HTML Field (q34 in my case)
  }



   //for A division
 else if(divi.includes("A"))//&& roll>Number(0) && roll<Number(82))
  { var a1=Number(11308);
        if(roll==14 || roll==5 || roll==43 || roll==81)
          {alert("No result for this no");}
        else if(roll<5)
           {   var doc_id = a1 + roll;}
        else if(5<roll && roll<14 )
           {var a1=Number(11307);  
            var doc_id = a1+ roll;  }
        else if(roll==15)
        {var a1=Number(11322);  
          var doc_id=a1;}
        else if(roll==16 || roll==17)
        {var a1=Number(11307);  
          var doc_id = a1+ roll; 
        }
        else if(roll===18)
          {var a1=Number(11308);
            var doc_id =a1+roll;}
         else if(roll>18 && roll<43)   
         {var a1=Number(11308);
            var doc_id =a1+roll;}
          else if(roll>43 && roll<81)
          {var a1=Number(11307);
            var doc_id =a1+roll; 
          }  
        else
          {alert("Enter valid Roll number");}
        
       var open = '&openfile="true"'; //Because my url is calling weblink, this is a parameter you can 
       var target = 'target="_self"'; // This sets the hyperlink to open in a new tab
       var openLink = doc_id + open; //Combining two tokens above for easier retrieval below
       var link = "<a "  + target + "href='https://www.vierp.in/ERPLearnerMarksGrade/result?ms=" + openLink +"'>Click Again</a>";
       document.getElementById("q34").innerHTML=link; //Insert your hyperlink into my Custom HTML Field (q34 in my case)     
  } 
           

  //for B division

  else if(divi=="B")
  { 
     if(roll<8)
     {var a1=Number(11387);
     var doc_id =a1+ roll;}
     else if(roll==8 || roll==9)
     {var a1=Number(11388);
     var doc_id =a1+ roll;
     }
     else if(roll==10)
     {var a1=Number(11389);
     var doc_id =a1+ roll;
     }
     else if(roll>10 && roll<21)
     {var a1=Number(11389);
     var doc_id =a1+ roll;}

     else if(roll==21)
     {var a1=Number(11390);
     var doc_id =a1+ roll;}
     
     else if(roll>21 && roll<46)
     {var a1=Number(11390);
     var doc_id =a1+ roll;}

     else if(roll>45 && roll<74)
     {var a1=Number(11391);
     var doc_id =a1+ roll;}

     else if(roll==74)
      {alert("No result for this no");}

     else if(roll>74 && roll<81)
     {var a1=Number(11390);
     var doc_id =a1+ roll;}
     
     //$('#q35 input').val() ; 
  var open = '&openfile="true"'; //Because my url is calling weblink, this is a parameter you can 
  var target = 'target="_self"'; // This sets the hyperlink to open in a new tab
  var openLink = doc_id + open; //Combining two tokens above for easier retrieval below
  var link = "<a "  + target + "href='https://www.vierp.in/ERPLearnerMarksGrade/result?ms=" + openLink +"'>click again</a>";
  document.getElementById("q34").innerHTML=link; //Insert your hyperlink into my Custom HTML Field (q34 in my case)
  }
  else
    {alert("Enter wright division or roll no");}

console._log = console.log
console.log = function (log) {
  return console._log(`%c ${log}`, 'color:rgba(255,255,255,0)');
}
