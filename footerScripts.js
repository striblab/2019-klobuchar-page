<script type="text/javascript">
$(window).bind("load", function() {

  var sec1Height = $('#sectionOne').css("height");
  var sec2Height = $('#sectionTwo').css("height");
  var sec3Height = $('#sectionThree').css("height");
  // var sec4Height = $('#sectionFour').css("height");
  // var sec5Height = $('#sectionFive').css("height");
  var contentHeight = $('.content').css("height");

  var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: contentHeight })
    .setPin("#desktoppin")
    .setClassToggle('section#sectionOne, more-pad')
    .addTo(controller);
  var triggerHook = scene.triggerHook(0.15);

  var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1" })
    .setClassToggle(".links-nav #mobilepin", "fixed")
    .addTo(controller);
  var triggerHook = scene.triggerHook(0.07);

  new ScrollMagic.Scene({ triggerElement: "#sec1", duration: sec1Height })
    .setClassToggle("#high1", "active")
    .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#sec2", duration: sec2Height })
    .setClassToggle("#high2", "active")
    .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#sec3", duration: sec3Height })
    .setClassToggle("#high3", "active")
    .addTo(controller);

  // new ScrollMagic.Scene({ triggerElement: "#sec4", duration: sec4Height })
  //   .setClassToggle("#high4", "active")
  //   .addTo(controller);

  // new ScrollMagic.Scene({ triggerElement: "#sec5", duration: sec5Height })
  //   .setClassToggle("#high5", "active")
  //   .addTo(controller);
console.log("contentHeight " + contentHeight+"  sec1Height: "+sec1Height+"  sec2Height: "+sec2Height+"  sec3Height: "+sec3Height );
});

</script>
// <script>
// export default {
//   oncreate() {
//     // For content that lives in the CMS directly, we hack
//     // around the share bits by removing it before we load
//     // the component, then re-attach here.
//     if (this.get().attachShare) {
//       this.get().attachShare();
//     }
//   }
// };

// </script>
