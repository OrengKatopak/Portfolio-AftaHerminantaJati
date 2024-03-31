function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0, 
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       /animasi/male0001.png
       /animasi/male0002.png
       /animasi/male0003.png
       /animasi/male0004.png
       /animasi/male0005.png
       /animasi/male0006.png
       /animasi/male0007.png
       /animasi/male0008.png
       /animasi/male0009.png
       /animasi/male0010.png
       /animasi/male0011.png
       /animasi/male0012.png
       /animasi/male0013.png
       /animasi/male0014.png
       /animasi/male0015.png
       /animasi/male0016.png
       /animasi/male0017.png
       /animasi/male0018.png
       /animasi/male0019.png
       /animasi/male0020.png
       /animasi/male0021.png
       /animasi/male0022.png
       /animasi/male0023.png
       /animasi/male0024.png
       /animasi/male0025.png
       /animasi/male0026.png
       /animasi/male0027.png
       /animasi/male0028.png
       /animasi/male0029.png
       /animasi/male0030.png
       /animasi/male0031.png
       /animasi/male0032.png
       /animasi/male0033.png
       /animasi/male0034.png
       /animasi/male0035.png
       /animasi/male0036.png
       /animasi/male0037.png
       /animasi/male0038.png
       /animasi/male0039.png
       /animasi/male0040.png
       /animasi/male0041.png
       /animasi/male0042.png
       /animasi/male0043.png
       /animasi/male0044.png
       /animasi/male0045.png
       /animasi/male0046.png
       /animasi/male0047.png
       /animasi/male0048.png
       /animasi/male0049.png
       /animasi/male0050.png
       /animasi/male0051.png
       /animasi/male0052.png
       /animasi/male0053.png
       /animasi/male0054.png
       /animasi/male0055.png
       /animasi/male0056.png
       /animasi/male0057.png
       /animasi/male0058.png
       /animasi/male0059.png
       /animasi/male0060.png
       /animasi/male0061.png
       /animasi/male0062.png
       /animasi/male0063.png
       /animasi/male0064.png
       /animasi/male0065.png
       /animasi/male0066.png
       /animasi/male0067.png
       /animasi/male0068.png
       /animasi/male0069.png
       /animasi/male0070.png
       /animasi/male0071.png
       /animasi/male0072.png
       /animasi/male0073.png
       /animasi/male0074.png
       /animasi/male0075.png
       /animasi/male0076.png
       /animasi/male0077.png
       /animasi/male0078.png
       /animasi/male0079.png
       /animasi/male0080.png
       /animasi/male0081.png
       /animasi/male0082.png
       /animasi/male0083.png
       /animasi/male0084.png
       /animasi/male0085.png
       /animasi/male0086.png
       /animasi/male0087.png
       /animasi/male0088.png
       /animasi/male0089.png
       /animasi/male0090.png
       /animasi/male0091.png
       /animasi/male0092.png
       /animasi/male0093.png
       /animasi/male0094.png
       /animasi/male0095.png
       /animasi/male0096.png
       /animasi/male0097.png
       /animasi/male0098.png
       /animasi/male0099.png
       /animasi/male0100.png
       /animasi/male0101.png
       /animasi/male0102.png
       /animasi/male0103.png
       /animasi/male0104.png
       /animasi/male0105.png
       /animasi/male0106.png
       /animasi/male0107.png
       /animasi/male0108.png
       /animasi/male0109.png
       /animasi/male0110.png
       /animasi/male0111.png
       /animasi/male0112.png
       /animasi/male0113.png
       /animasi/male0114.png
       /animasi/male0115.png
       /animasi/male0116.png
       /animasi/male0117.png
       /animasi/male0118.png
       /animasi/male0119.png
       /animasi/male0120.png
       /animasi/male0121.png
       /animasi/male0122.png
       /animasi/male0123.png
       /animasi/male0124.png
       /animasi/male0125.png
       /animasi/male0126.png
       /animasi/male0127.png
       /animasi/male0128.png
       /animasi/male0129.png
       /animasi/male0130.png
       /animasi/male0131.png
       /animasi/male0132.png
       /animasi/male0133.png
       /animasi/male0134.png
       /animasi/male0135.png
       /animasi/male0136.png
       /animasi/male0137.png
       /animasi/male0138.png
       /animasi/male0139.png
       /animasi/male0140.png
       /animasi/male0141.png
       /animasi/male0142.png
       /animasi/male0143.png
       /animasi/male0144.png
       /animasi/male0145.png
       /animasi/male0146.png
       /animasi/male0147.png
       /animasi/male0148.png
       /animasi/male0149.png
       /animasi/male0150.png
       /animasi/male0151.png
       /animasi/male0152.png
       /animasi/male0153.png
       /animasi/male0154.png
       /animasi/male0155.png
       /animasi/male0156.png
       /animasi/male0157.png
       /animasi/male0158.png
       /animasi/male0159.png
       /animasi/male0160.png
       /animasi/male0161.png
       /animasi/male0162.png
       /animasi/male0163.png
       /animasi/male0164.png
       /animasi/male0165.png
       /animasi/male0166.png
       /animasi/male0167.png
       /animasi/male0168.png
       /animasi/male0169.png
       /animasi/male0170.png
       /animasi/male0171.png
       /animasi/male0172.png
       /animasi/male0173.png
       /animasi/male0174.png
       /animasi/male0175.png
       /animasi/male0176.png
       /animasi/male0177.png
       /animasi/male0178.png
       /animasi/male0179.png
       /animasi/male0180.png
       /animasi/male0181.png
       /animasi/male0182.png
       /animasi/male0183.png
       /animasi/male0184.png
       /animasi/male0185.png
       /animasi/male0186.png
       /animasi/male0187.png
       /animasi/male0188.png
       /animasi/male0189.png
       /animasi/male0190.png
       /animasi/male0191.png
       /animasi/male0192.png
       /animasi/male0193.png
       /animasi/male0194.png
       /animasi/male0195.png
       /animasi/male0196.png
       /animasi/male0197.png
       /animasi/male0198.png
       /animasi/male0199.png
       /animasi/male0200.png
       /animasi/male0201.png
       /animasi/male0202.png
       /animasi/male0203.png
       /animasi/male0204.png
       /animasi/male0205.png
       /animasi/male0206.png
       /animasi/male0207.png
       /animasi/male0208.png
       /animasi/male0209.png
       /animasi/male0210.png
       /animasi/male0211.png
       /animasi/male0212.png
       /animasi/male0213.png
       /animasi/male0214.png
       /animasi/male0215.png
       /animasi/male0216.png
       /animasi/male0217.png
       /animasi/male0218.png
       /animasi/male0219.png
       /animasi/male0220.png
       /animasi/male0221.png
       /animasi/male0222.png
       /animasi/male0223.png
       /animasi/male0224.png
       /animasi/male0225.png
       /animasi/male0226.png
       /animasi/male0227.png
       /animasi/male0228.png
       /animasi/male0229.png
       /animasi/male0230.png
       /animasi/male0231.png
       /animasi/male0232.png
       /animasi/male0233.png
       /animasi/male0234.png
       /animasi/male0235.png
       /animasi/male0236.png
       /animasi/male0237.png
       /animasi/male0238.png
       /animasi/male0239.png
       /animasi/male0240.png
       /animasi/male0241.png
       /animasi/male0242.png
       /animasi/male0243.png
       /animasi/male0244.png
       /animasi/male0245.png
       /animasi/male0246.png
       /animasi/male0247.png
       /animasi/male0248.png
       /animasi/male0249.png
       /animasi/male0250.png
       /animasi/male0251.png
       /animasi/male0252.png
       /animasi/male0253.png
       /animasi/male0254.png
       /animasi/male0255.png
       /animasi/male0256.png
       /animasi/male0257.png
       /animasi/male0258.png
       /animasi/male0259.png
       /animasi/male0260.png
       /animasi/male0261.png
       /animasi/male0262.png
       /animasi/male0263.png
       /animasi/male0264.png
       /animasi/male0265.png
       /animasi/male0266.png
       /animasi/male0267.png
       /animasi/male0268.png
       /animasi/male0269.png
       /animasi/male0270.png
       /animasi/male0271.png
       /animasi/male0272.png
       /animasi/male0273.png
       /animasi/male0274.png
       /animasi/male0275.png
       /animasi/male0276.png
       /animasi/male0277.png
       /animasi/male0278.png
       /animasi/male0279.png
       /animasi/male0280.png
       /animasi/male0281.png
       /animasi/male0282.png
       /animasi/male0283.png
       /animasi/male0284.png
       /animasi/male0285.png
       /animasi/male0286.png
       /animasi/male0287.png
       /animasi/male0288.png
       /animasi/male0289.png
       /animasi/male0290.png
       /animasi/male0291.png
       /animasi/male0292.png
       /animasi/male0293.png
       /animasi/male0294.png
       /animasi/male0295.png
       /animasi/male0296.png
       /animasi/male0297.png
       /animasi/male0298.png
       /animasi/male0299.png
       /animasi/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })