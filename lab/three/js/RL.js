var RL = {};


RL.random = function(minVal,maxVal,floatVal)
{

  var randVal = minVal+(Math.random()*(maxVal-minVal));
  
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
  
}
