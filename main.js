function startTime() {
  const today = new Date();
  let d = today.getDay();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  d = checkTime(d);
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);



  let code = " " + d + h + m;
  let refcode = 0;
  document.getElementById('codecheck').innerHTML = "log for developer:" + code;
  checkCode(code, refcode, 'theSubject', 'classlink');
  let nextrefcode = Number(checkCode(code, refcode, 'theSubject', 'classlink') + 1);

  document.getElementById('refcode1').innerHTML = 'logr01 : ' + checkCode(code, refcode, 'theSubject', 'classlink');
  document.getElementById('refcode2').innerHTML = 'logr02 : ' + nextrefcode;

  checkCode(0, nextrefcode, 'thenextSubject', 'nextclasslink');



  let periodCount = Math.floor(checkCode(code, refcode, 'theSubject', 'classlink'));
  let periodCount2 = periodCount % 10;
  let nextperiodCount2 = periodCount2 + 1;
  document.getElementById('nextperiod').innerHTML = "คาบ " + nextperiodCount2;



  if (periodCount2 == 0) {
    periodCount2 = "-"
    nextperiodCount2 = "-";
    document.getElementById('nextperiod').innerHTML = "คาบ " + nextperiodCount2;
  }
  document.getElementById('period').innerHTML = "คาบ " + periodCount2;


  setTimeout(startTime, 1000);



  return code;
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function checkCode(j, ref, z, zl) {
  let x = Number(j);
  if (j == 0) {
    x = 0;
    ref = Math.floor(ref)
  } else {
    x = Number(j);
  }


  if (x >= 10000 && x < 10840 || ref == 11) {
    document.getElementById(z).innerHTML = " History";
    var str = "Link to History Class";
    var result = str.link("https://meet.google.com/lookup/hnbcknlsrj");
    document.getElementById(zl).innerHTML = result;
    ref = 11;
  }
  else if (x >= 10840 && x < 10930 || ref == 12) {
    document.getElementById(z).innerHTML = " English";
    var str = "Link to English Class";
    var result = str.link("https://meet.google.com/lookup/e2gwqph33l");
    document.getElementById(zl).innerHTML = result;
    ref = 12;
  }
  else if (x >= 10930 && x < 10940 || ref == 12.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 12.5;
  }
  else if (x >= 10940 && x < 11030 || ref == 13) {
    document.getElementById(z).innerHTML = " English";
    var str = "Link to English Class";
    var result = str.link("https://meet.google.com/lookup/e2gwqph33l");
    document.getElementById(zl).innerHTML = result;
    ref = 13;
  }
  else if (x >= 11030 && x < 11120 || ref == 14) {
    document.getElementById(z).innerHTML = " Fundamental Math";
    var str = "Link in google classroom";
    var result = str.link("https://classroom.google.com/u/3/c/MzQzNTMxNjA2MTc5");
    document.getElementById(zl).innerHTML = result;
    ref = 14;
  }
  else if (x >= 11120 && x < 11220 || ref == 14.5) {
    document.getElementById(z).innerHTML = " Lunch";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 14.5

  }
  else if (x >= 11220 && x < 11310 || ref == 15) {
    document.getElementById(z).innerHTML = " Guidance";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 15;
  }
  else if (x >= 11310 && x < 11400 || ref == 16) {
    document.getElementById(z).innerHTML = " Physics";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 16;
  }
  else if (x >= 11400 && x < 11410 || ref == 16.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 16.5;
  }
  else if (x >= 11410 && x < 11500 || ref == 17) {
    document.getElementById(z).innerHTML = " Physics";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 17;
  }
  else if (x >= 11500 && x < 11550 || ref == 18) {
    document.getElementById(z).innerHTML = " Club";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 18;
  }
  else if (x >= 20000 && x < 20840 || ref == 21) {
    document.getElementById(z).innerHTML = " Advance Math";
    var str = "Link to Adv Math Class";
    var result = str.link("https://us02web.zoom.us/j/2563104534?pwd=bFM0YjlkdkJaTVpvN2tuVEVJcUVsQT09");
    document.getElementById(zl).innerHTML = result;

    ref = 21;
  }
  else if (x >= 20840 && x < 20930 || ref == 22) {
    document.getElementById(z).innerHTML = " Chemistry";
    var str = "Link to Chemistry Class";
    var result = str.link("https://zoom.us/j/5436500745?pwd=QlhTWDhEUDBKbDdIVDlJelN2Y3Z2UT09");
    document.getElementById(zl).innerHTML = result;
    ref = 22;
  }
  else if (x >= 20930 && x < 20940 || ref == 22.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 22.5;

  }
  else if (x >= 20940 && x < 21030 || ref == 23) {
    document.getElementById(z).innerHTML = " Thai";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 23;
  }
  else if (x >= 21030 && x < 21120 || ref == 24) {
    document.getElementById(z).innerHTML = " Fundamental Math";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 24;
  }
  else if (x >= 21120 && x < 21220 || ref == 24.5) {
    document.getElementById(z).innerHTML = " Lunch";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 24.5;

  }
  else if (x >= 21220 && x < 21310 || ref == 25) {
    document.getElementById(z).innerHTML = " Biology";
    var str = "Link to Biology Class";
    var result = str.link("https://us02web.zoom.us/j/8370851895?pwd=aGJKK2RIY0FtMStwZnh6MUhtZkg5dz09");
    document.getElementById(zl).innerHTML = result;

    ref = 25;
  }
  else if (x >= 21310 && x < 21400 || ref == 26) {
    document.getElementById(z).innerHTML = " Leelas";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 26;
  }
  else if (x >= 21400 && x < 21410 || ref == 27) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 27;
  }
  else if (x >= 21410 && x < 21500) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 28;

  }
  else if (x >= 21500 && x < 21550) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 29;
  }
  else if (x >= 30000 && x < 30840 || ref == 31) {
    document.getElementById(z).innerHTML = " Chemistry";
    var str = "Link to Chemistry Class";
    var result = str.link("https://zoom.us/j/5436500745?pwd=QlhTWDhEUDBKbDdIVDlJelN2Y3Z2UT09");
    document.getElementById(zl).innerHTML = result;
    ref = 31;
  }
  else if (x >= 30840 && x < 30930 || ref == 32) {
    document.getElementById(z).innerHTML = " Advance Math";
    var str = "Link to Adv Math Class";
    var result = str.link("https://us02web.zoom.us/j/2563104534?pwd=bFM0YjlkdkJaTVpvN2tuVEVJcUVsQT09");
    document.getElementById(zl).innerHTML = result;
    ref = 32;
  }
  else if (x >= 30930 && x < 30940 || ref == 32.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 32.5;

  }
  else if (x >= 30940 && x < 31030 || ref == 33) {
    document.getElementById(z).innerHTML = " Plagrim";
    var str = "Link to Plagrim Class";
    var result = str.link("https://meet.google.com/lookup/aiowm3gvhw?authuser=2&hs=179");
    document.getElementById(zl).innerHTML = result;
    ref = 33;
  }
  else if (x >= 31030 && x < 31120 || ref == 34) {
    document.getElementById(z).innerHTML = " Physics";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 34;
  }
  else if (x >= 31120 && x < 31220 || ref == 34.5) {
    document.getElementById(z).innerHTML = " Lunch";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 34.5;
  }
  else if (x >= 31220 && x < 31310 || ref == 35) {
    document.getElementById(z).innerHTML = " English";
    var str = "Link to English Class";
    var result = str.link("https://meet.google.com/lookup/e2gwqph33l?authuser=2&hs=179");
    document.getElementById(zl).innerHTML = result;
    ref = 35;
  }
  else if (x >= 31310 && x < 31400 || ref == 36) {
    document.getElementById(z).innerHTML = " History";
    var str = "Link to History Class";
    var result = str.link("https://meet.google.com/lookup/hnbcknlsrj?authuser=2&hs=179");
    document.getElementById(zl).innerHTML = result;
    ref = 36;
  }
  else if (x >= 31400 && x < 31410 || ref == 36.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 36.5;
  }
  else if (x >= 31410 && x < 31500 || ref == 37) {
    document.getElementById(z).innerHTML = " Fundamental Math";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 37;
  }
  else if (x >= 31500 && x < 31550) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
  }
  else if (x >= 40000 && x < 40840 || ref == 41) {
    document.getElementById(z).innerHTML = " Thai";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 41;
  }
  else if (x >= 40840 && x < 40930 || ref == 42) {
    document.getElementById(z).innerHTML = " Buddhism";
    var str = "Link to Buddhism Class";
    var result = str.link("https://meet.google.com/lookup/glsv6fsvab?authuser=2&hs=179");
    document.getElementById(zl).innerHTML = result;
    ref = 42;
  }
  else if (x >= 40930 && x < 40940 || ref == 42.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 42.5;
  }
  else if (x >= 40940 && x < 41030 || ref == 43) {
    document.getElementById(z).innerHTML = " Science";
    var str = "Link to Science Class";
    var result = str.link("https://meet.google.com/lookup/dmxot5o2pq?authuser=2&hs=179");
    document.getElementById(zl).innerHTML = result;
    ref = 43;
  }
  else if (x >= 41030 && x < 41120 || ref == 44) {
    document.getElementById(z).innerHTML = " Advance Math";
    var str = "Link to Adv Math Class";
    var result = str.link("https://us02web.zoom.us/j/2563104534?pwd=bFM0YjlkdkJaTVpvN2tuVEVJcUVsQT09");
    document.getElementById(zl).innerHTML = result;
    ref = 44;
  }
  else if (x >= 41120 && x < 41220 || ref == 44.5) {
    document.getElementById(z).innerHTML = " Lunch";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 44.5
  }
  else if (x >= 41220 && x < 41310 || ref == 45) {
    document.getElementById(z).innerHTML = " HR";
    var str = "Link to HR Class";
    var result = str.link("https://us02web.zoom.us/j/8370851895?pwd=aGJKK2RIY0FtMStwZnh6MUhtZkg5dz09");
    document.getElementById(zl).innerHTML = result;
    ref = 45;
  }
  else if (x >= 41310 && x < 41400 || ref == 46) {
    document.getElementById(z).innerHTML = " Biology";
    var str = "Link to Biology Class";
    var result = str.link("https://us02web.zoom.us/j/8370851895?pwd=aGJKK2RIY0FtMStwZnh6MUhtZkg5dz09");
    document.getElementById(zl).innerHTML = result;
    ref = 46;
  }
  else if (x >= 41400 && x < 41410 || ref == 46.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 46.5;
  }
  else if (x >= 41410 && x < 41500 || ref == 47) {
    document.getElementById(z).innerHTML = " Chemistry";
    var str = "Link to Chemistry Class";
    var result = str.link("https://zoom.us/j/5436500745?pwd=QlhTWDhEUDBKbDdIVDlJelN2Y3Z2UT09");
    document.getElementById(zl).innerHTML = result;
    ref = 47;
  }
  else if (x >= 41500 && x < 41550) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
  }

  else if (x >= 50000 && x < 50840 || ref == 51) {
    document.getElementById(z).innerHTML = " Herry";
    var str = "Link to Herry's Class";
    var result = str.link("https://zoom.us/j/98557891564?pwd=SFJnV09ld0loQXlqNXpOOTFKVFYxZz09");
    document.getElementById(zl).innerHTML = result;
    ref = 51;
  }
  else if (x >= 50840 && x < 50930 || ref == 52) {
    document.getElementById(z).innerHTML = " Physics";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 52;
  }
  else if (x >= 50930 && x < 50940 || ref == 52.5) {
    document.getElementById(z).innerHTML = " Break";
    document.getElementById(zl).innerHTML = "No-link";
    ref = 52.5;
  }
  else if (x >= 50940 && x < 51030 || ref == 53) {
    document.getElementById(z).innerHTML = " Biology";
    var str = "Link to Biology Class";
    var result = str.link("https://us02web.zoom.us/j/8370851895?pwd=aGJKK2RIY0FtMStwZnh6MUhtZkg5dz09");
    document.getElementById(zl).innerHTML = result;
    ref = 53;
  }
  else if (x >= 51030 && x < 52359) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";

    //var str = "Free Web Building Tutorials";
    //var result = str.link("");
    document.getElementById(zl).innerHTML = "No-link";
  }
  else if (x >= 60000 && x < 62359) {
    document.getElementById(z).innerHTML = " Sat Weekend";
    document.getElementById(zl).innerHTML = "No-link";
  }
  else if (ref == 1) {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";
  }
  else if (x >= 0 && x < 2359) {
    document.getElementById(z).innerHTML = " Sun Weekend";
    document.getElementById(zl).innerHTML = "No-link";
  }
  else {
    document.getElementById(z).innerHTML = " No Class";
    document.getElementById(zl).innerHTML = "No-link";

  }
  return ref;


}