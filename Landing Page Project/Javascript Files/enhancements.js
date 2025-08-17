function App() {
  React.useEffect(() => {

    $('#root').each(function() {
        const element = $(this);
        const popUpElement = $('<div class="wrapper-pop-up"> </div>');
        element.prepend(popUpElement);
        const popupTake = element.find('.cmElement.cmContent');
        popupTake.each(function(index){
            const el = $(this);
            const popups = el.find('.pop-up-element');
            element.find('.wrapper-pop-up').append(popups);

            el.find('.open-pop-up').click(function() {
                $('.pop-up-element').removeClass('pop-up-active');
                popups.addClass('pop-up-active');
                $('body').addClass('active-pop-up');
            });

            popups.find('.close-element').click(function() {
               $('.pop-up-element').removeClass('pop-up-active');
                $('body').removeClass('active-pop-up');
            });

        })
    });

    //Animations 
    $(".survey-choose , .testimonials-panel , .frequently-question , .text-content-container").each(function() {
      const el = $(this);

      new Waypoint({
        element: el[0],
        handler: function(direction) {
          if (direction === "down") {
            el.addClass("active");
          } else {
            el.removeClass("active");
          }
        },
        offset: "50%"
      });

      new Waypoint({
        element: el[0],
        handler: function(direction) {
          if (direction === "up") {
            el.addClass("active");
          } else {
            el.removeClass("active");
          }
        },
        offset: "-50%" 
      });
    });

    $('.hero-content .timerElement .elem-wrap').each(function() {
      const area = $(this);
      let totalSeconds = 42 * 60;

      function updateCountdown() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        let display = 
          (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds);

        area.text(display);

        if (totalSeconds > 0) {
          totalSeconds--;
        } else {
          clearInterval(timer);
          area.text("TIMP EXPIRAT!");
        }
      }

      updateCountdown();
      let timer = setInterval(updateCountdown, 1000);
    });

    $('.wrapperContainer').each(function() {
        const $slider = $(this);
        const $navContainer = $('<div class="my-nav-container"></div>');
        $navContainer.insertAfter($slider);

        // Inițializează Slick
        $slider.slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $navContainer,
            appendDots: $navContainer,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1 
                    }
                },
            {
                    breakpoint: 1100,
                    settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 1,
                    }
                }
            ]


        });

        });

  }, []);

  return (
<div>
    <div className="testimonials-panel">

      <header>
        <div className="cmElementTitle">
          <h2>What Our Members Say</h2>
        </div>
      </header>

      <div className="wrapperContainer"> 

        <div className="cmElement cmContent testimonial-box">
          <div className="content-box">
            <p>"I never thought sharing my opinion could be so rewarding. Payments are always on time!"</p>
          </div>
          <div className="name-box">
            <h2>Sarah K.</h2>
          </div>
          <button class="open-pop-up"> Button Open</button>
                  <div className="pop-up-element"> 
            <p> "I never thought sharing my opinion could be so rewarding. Not only are the payouts always on time, but the surveys are fun and easy to complete. It feels good knowing my feedback is actually valued by companies. Over time, I’ve realized that this platform isn’t just about the rewards, it’s about being part of a community that shapes real products and services. I can see the difference my opinions make, and that motivates me even more. This has quickly become something I truly enjoy and rely on as a steady side income."</p>
            <div className="name-box">
                <h2>Sarah K.</h2>
            </div>
            <button class="close-element"> Button Close </button>
          </div>
        </div>

        <div className="cmElement cmContent testimonial-box">
          <div className="content-box">
            <p>"The surveys are easy and fun to complete. I can do them while commuting."</p>
          </div>
          <div className="name-box">
            <h2>David L.</h2>
          </div>
          <button class="open-pop-up"> Button Open</button>
        <div className="pop-up-element"> 
            <p> "The surveys are really easy and enjoyable, which makes them perfect for filling in the little gaps of my day. I often complete them while commuting or waiting between tasks. It doesn’t feel like work, and I actually look forward to checking what new surveys are available. I’ve been using the platform for months now and it never feels repetitive—there’s always something fresh. What I love most is how consistent the payouts are, and how simple it is to cash out. It’s one of the rare platforms that really delivers on its promises."</p>
            <div className="name-box">
                <h2>David L.</h2>
            </div>
            <button class="close-element"> Button Close </button>
          </div>
        </div>

        <div className="cmElement cmContent testimonial-box">
          <div className="content-box">
            <p>"Finally found a platform I can trust. The payouts are real and the support is great."</p>
          </div>
          <div className="name-box">
            <h2>Emma R.</h2>
          </div>
          <button class="open-pop-up"> Button Open</button>
        <div className="pop-up-element"> 
            <p> "For years, I tried different survey websites but most of them either didn’t pay or made the process complicated. With this platform, everything feels straightforward and trustworthy. The payouts are real, the process is seamless, and whenever I needed help, support was quick and friendly. I finally feel like I’ve found a platform that values both my time and my feedback. I’ve already recommended it to several friends, and they’ve all had the same great experience. In today’s world, finding something so reliable online is rare, and that makes this service stand out even more."</p>
            <div className="name-box">
                <h2>Emma R.</h2>
            </div>
            <button class="close-element"> Button Close </button>
          </div>
        </div>

        <div className="cmElement cmContent testimonial-box">
          <div className="content-box">
            <p>"Extra income every month just by giving my thoughts. Couldn’t be easier!"</p>
          </div>
          <div className="name-box">
            <h2>Michael B.</h2>
          </div>
          <button class="open-pop-up"> Button Open</button>
          <div className="pop-up-element"> 
            <p> "Earning extra income has never been this simple. Every month I get paid just for sharing my thoughts on products and services I use anyway. The surveys don’t take long, and the process couldn’t be easier. I’ve built a small but steady stream of income from this, and it really helps with little extras each month. It’s stress-free, straightforward, and surprisingly enjoyable. Over time, I’ve even started to feel proud that my feedback contributes to real changes in products. It’s more than just money—it’s also about knowing that my voice matters in a meaningful way."</p>
            <div className="name-box">
                <h2>Michael B.</h2>
            </div>
            <button class="close-element"> Button Close </button>
          </div>
        </div>

        <div className="cmElement cmContent testimonial-box">
          <div className="content-box">
            <p>"I love the flexibility this platform offers.I can take surveys anytime I want."</p>
          </div>
          <div className="name-box">
            <h2>Anna P.</h2>
          </div>
          <button class="open-pop-up"> Button Open</button>
                  <div className="pop-up-element"> 
            <p> "What I value most is the flexibility. I can take surveys at any time of the day, whether I’m relaxing at home in the evening, having a coffee in the morning, or even when I get a quick break at work. There are no strict schedules, no deadlines, and no stress. The platform adapts to my life instead of the other way around, and that makes it perfect for me. Over time, I’ve realized that this freedom is what keeps me engaged—I never feel pressured, only motivated. It has become a reliable and stress-free way to earn while fitting perfectly into my lifestyle."</p>
            <div className="name-box">
                <h2>Anna P.</h2>
            </div>
            <button class="close-element"> Button Close </button>
          </div>
        </div>

      </div>
    </div>
</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);