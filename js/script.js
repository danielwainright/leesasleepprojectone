  for (var x=1; x <= 100; x++) {
      var skip = 0;

      if ( x % 3 == 0  &&  x % 5 == 0 ) {
          document.write('<span class="lessaSleep">LeesaSleep</span> ');
          skip = 1;
          continue;
      }
      if (x % 5 == 0) {
          document.write('<span class="sleep">Sleep</span> ');
          skip = 1;
          continue;
      }
      if (x % 3 == 0) {
          document.write('<span class="lessa">Leesa</span> ');
          skip = 1;
          continue;
      }
      if (!skip) {
          document.write(x + ', ');
      } 
  }