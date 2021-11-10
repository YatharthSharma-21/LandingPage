import logo from './logo.svg';
import './App.css';
import headerImg from './assets/img/bg/headerImg.png';
import headerSape2 from './assets/img/shape/headerSape2.png';
import headerSape3 from './assets/img/shape/headerSape3.png';


function App() {
  return (
    <main>
            {/* <!-- slider-area --> */}
            <section id="parallax" className="slider-area slider-bg2 second-slider-bg d-flex fix" style={{backgroundImage: `url(${headerImg})`, backgroundPosition:'right 0', backgroundRepeat: 'no-repeat', backgroundSize: '65%'}}>
                
                <div className="slider-shape ss-one layer" data-depth="0.10">
                  <img src="img/shape/header-sape.png" alt="shape" /></div>
               
     			 <div className="slider-shape ss-eight layer" data-depth="0.50"></div>
                
                
               
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="slider-content second-slider-content left-center">         
                                        <ul className="small-title mb-30">
                                            <li>New</li>
                                            <li>Best Mobile App</li>                                            
                                        </ul>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">Best Mobile App <span>Showcase</span></h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa nisi. Nullam porta lorem at volutpat euismod. Proin in ex nunc.</p>
                                        <div className="slider-btn mt-30 mb-30">
                                            <a href="#" className="btn ss-btn" data-animation="fadeInUp" data-delay=".8s">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                 <div className="col-lg-6">
                                     <img src="img/bg/mobile.png" alt="shape" className="s-img"/>
                                </div>
                            </div>
                    
                </div>
            </section>
            {/* <!-- slider-area-end -->
			 <!-- services-area --> */}
            <section id="about" className="services-area services-bg pt-25 pb-20" style={{backgroundImage: `url(${headerSape2})`, backgroundPosition: 'right top', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-45">
                                <h2>Our Features</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-30">
                            <div className="s-single-services active text-center">
                                <div className="services-icon">
                                   <img src="img/icon/f-icon1.png"/>
                                </div>
                                <div className="second-services-content">
                                    <h5>Perfect UI Design</h5>
                                    <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                                    <a href="#"><span>1</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-30">
                            <div className="s-single-services text-center">
                                 <div className="services-icon">
                                  <img src="img/icon/f-icon3.png"/>
                                </div>
                                <div className="second-services-content">
                                    <h5>Great CSS Animation</h5>
                                    <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                                    <a href="#"><span>2</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-30">
                           <div className="s-single-services text-center">
                                <div className="services-icon">
                                  <img src="img/icon/f-icon2.png"/>
                                </div>
                                <div className="second-services-content">
                                    <h5>Fully Secured</h5>
									<p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
                                    <a href="#"><span>3</span></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                  
                </div>
            </section>
            {/* <!-- services-area-end -->
			<!-- choose-area --> */}
            <section className="choose-area pt-100 pb-60 p-relative" style={{backgroundImage: `url(${headerSape3})`, backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="chosse-img" style={{backgroundImage:"url(img/bg/easy-m-bg.png)"}}></div>
                <div className="chosse-img2"><img src="img/bg/mobile2.png" alt="mobile"/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                        </div>
                        <div className="col-xl-7">
                            <div className="choose-wrap">
                                <div className="section-title w-title left-align mb-25">
                                    <h2>Easy And Perfect Solution For Your Business App</h2>
                                </div>
                                <div className="choose-content">
                                    <p>Aliquam aliquet purus a est consequat lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis.</p>
                                     <p>Consequat purus aliquet a est aliquam lobortis. Etiam vehicula suscipit purus, eget ullamcorper augue blandit vitae. Ut eu euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed fermentum a lacus bibendum convallis.</p>
                                   
                                    <div className="choose-btn mt-30">
                                        <a href="#"><span className="icon"><img src="img/icon/apple-icon.png" alt="apple-icon" /></span> 
                                            <span className="text"> Available on <strong>APP STORE</strong></span></a>
                                        <a href="#" className="g-btn"><span className="icon"><img src="img/icon/g-play-icon.png" alt="apple-icon" /></span> 
                                            <span className="text"> Available on <strong>GOOGLE PLAY</strong></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- choose-area-end -->
            <!-- how-app-work --> */}
            <section id="features" className="app-work pt-70 pb-100 p-relative" style={{backgroundImage: 'url(img/shape/header-sape4.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>            
                <div className="container">
                    <div className="row align-items-center ">
                       
                        <div className="col-xl-6">
                            <div className="choose-wrap">
                                <div className="section-title w-title left-align mb-15">
                                    <h2>How does This App Work?</h2>
                                </div>
                                <div className="app-work-content mt-20">
                                    <ul>
                                        <li>
                                            <div className="icon"><img src="img/icon/apw-Icon1.png"/></div> 
                                            <div className="text">
                                                <h4>Make A Profile</h4>
                                                <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><img src="img/icon/apw-Icon2.png"/></div> 
                                            <div className="text">
                                                <h4>Download It For Free</h4>
                                                <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><img src="img/icon/apw-Icon3.png"/></div> 
                                            <div className="text">
                                                <h4>Enjoy This App</h4>
                                                <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-6">
                            <img src="img/bg/app-work-img.png" alt="app-work-img" className="img"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- how-app-work -->
            <!-- video-area --> */}
            <section className="video-area pt-100 pb-100 p-relative">                
                <div className="video-img2">
                    
                    <img src="img/bg/video-img.png" alt="mobile"/>
                
                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="popup-video"><img src="img/bg/play-btn.png" alt="play-btn.png"/></a>
                </div>
                <div className="video-img3">
                    <img src="img/shape/header-sape5.png" alt="header-sape4"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                        </div>
                        <div className="col-xl-6">
                            <div className="video-wrap">
                                <div className="section-title w-title left-align mb-25">
                                    <h2>Build The App That Everyonee Love</h2>
                                </div>
                                <div className="video-content">
                                    <p>Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum accumsan finibus. Cras placerat lacinia mi, ac dictum ante. Donec libero enim, tincidunt sit amet venenatis id, maximus eu quam. </p>
                                     <ul>
                                        <li>
                                            <div className="icon"><img src="img/icon/vs-icon.png"/></div> 
                                            <div className="text">Pellentesque placerat, nisi congue vehicula efficitur.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><img src="img/icon/vs-icon.png"/></div> 
                                            <div className="text">Pellentesque placerat, nisi congue vehicula efficitur.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><img src="img/icon/vs-icon.png"/></div> 
                                            <div className="text">Suspendisse vitae varius diam, a vulputate urna.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- video-area-end -->
            <!-- screen-area --> */}
            <section id="screen" className="screen-area services-bg services-two pt-100 pb-70"  style={{backgroundImage: 'url(img/shape/header-sape4.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-50">                               
                                <h2>Our App ScreenShots</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                         {/* <!-- Swiper --> */}
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide"><img src="img/gallery/screen-img01.png" alt="slide 1"/></div>
                              <div className="swiper-slide"><img src="img/gallery/screen-img02.png" alt="slide 1"/></div>
                              <div className="swiper-slide"><img src="img/gallery/screen-img03.png" alt="slide 1"/></div>
                              <div className="swiper-slide"><img src="img/gallery/screen-img04.png" alt="slide 1"/></div>
                              <div className="swiper-slide"><img src="img/gallery/screen-img05.png" alt="slide 1"/></div>

                            </div>
                            {/* <!-- Add Pagination --> */}
                            <div className="swiper-pagination"></div>
                          </div>

          </div>
                    </div>
                    

            </section>
            {/* <!-- screen-area-end -->     
            
            <!-- faq-area --> */}
            <section className="faq-area pb-100" style={{backgroundImage: 'url(img/shape/header-sape6.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <div className="row align-items-end">                        
                        <div className="col-lg-6">
                            <div className="faq-img text-right">
                                <img src="img/icon/logos-icons.png" alt="img" className="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title left-align mb-50">                               
                                <h2>Designed & Worked By The Latest Partners</h2>
                                <p>Duis non aliquet tellus, in mollis leo. Phasellus quis posuere dui. Nulla mauris purus, mattis eget sagittis at, accumsan sed leo.</p>
                            </div>
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="faq-btn" type="button" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                    Aliquam varius ligula nec leo tempus porta.
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                   Suspendisse vitae varius diam, a vulputate urna.
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="faq-btn collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                   Aliquam aliquet purus eget lacus pretium.
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- faq-aread-end -->
            
             <!-- newslater-area --> */}
            <section className="newslater-area pt-90 pb-100" style={{backgroundImage: 'url(img/bg/subscribe-bg.png)',backgroundSize: 'cover'}} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center pl-40 pr-40 mb-50">
                                <h2>Subscreibe For New Features</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                        </div>
                    </div>
                   <div className="row justify-content-center">          
                       <div className="col-xl-6 col-lg-10">
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                               <div className="form-group">
                                  <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." value="" required=""/> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                               {/* <!-- /Form-email -->	 */}
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- newslater-aread-end -->
          
			<!-- pricing-area --> */}
            <section id="pricing" className="pricing-area pt-100 pb-50" style={{backgroundImage: 'url(img/shape/header-sape7.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-50">     
                                <h2>Our Pricing Plans</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                             <nav className="pricing-tab mb-60">
                        <span className="monthly_tab_title">
                        Monthly                 </span>
                        <span className="pricing-tab-switcher"></span>
                        <span className="annual_tab_title">
                        Annual                  </span>
                     </nav>
                        </div>
                        
                       
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing-box text-center mb-60">
                                <div className="pricing-head">                                  
                                    <h4>Beginner</h4>
                                    <div className="pricing-amount">
                                       <div className="annual_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 95 </span>
                                          <span className="subscription"> / Annual </span>
                                       </div>
                                       <div className="monthly_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 15 </span>
                                          <span className="subscription"> / Monthly </span>
                                       </div>
                                    </div>
                                    <h5>I have a dream</h5>
                                </div>
                                
                                <div className="pricing-body mb-40 text-left">
                                    
									<ul>
										<li>1000+ projets</li>
										<li>No transaction fees</li>
										<li>Unlimited Storage</li>
										<li>5 Download</li>
									</ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="btn">Start Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing-box active text-center mb-60">
                                <div className="poppuler">
                                    <span className="btn">Poppuler</span>
                                </div>
                                <div className="pricing-head">                                  
                                    <h4>Starter</h4>
                                    <div className="pricing-amount">
                                       <div className="annual_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price">  78 </span>
                                          <span className="subscription"> /Annual </span>
                                       </div>
                                       <div className="monthly_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 15 </span>
                                          <span className="subscription"> /Monthly </span>
                                       </div>
                                    </div>
                                    <h5>I have a dream</h5>
                                </div>
                                 <div className="pricing-body mb-40 text-left">
                                    
									<ul>
										<li>1000+ projets</li>
										<li>No transaction fees</li>
										<li>Unlimited Storage</li>
										<li>5 Download</li>
									</ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="btn">Start Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing-box active text-center mb-60">                 
                                <div className="pricing-head">                                  
                                    <h4>Professionl</h4>
                                    <div className="pricing-amount">
                                       <div className="annual_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price">  90 </span>
                                          <span className="subscription"> / Annual </span>
                                       </div>
                                       <div className="monthly_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 18 </span>
                                          <span className="subscription"> / Monthly </span>
                                       </div>
                                    </div>
                                    <h5>I have a dream</h5>
                                </div>
                                
                                  <div className="pricing-body mb-40 text-left">
                                    
									<ul>
										<li>1000+ projets</li>
										<li>No transaction fees</li>
										<li>Unlimited Storage</li>
										<li>5 Download</li>
									</ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="btn">Start Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <div className="pricing-box active text-center mb-60">
                                <div className="pricing-head">                                   
                                    <h4>Power Plan</h4>
                                    <div className="pricing-amount">
                                       <div className="annual_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 120 </span>
                                          <span className="subscription"> / Annual </span>
                                       </div>
                                       <div className="monthly_price">
                                          <sup><span className="currency">$</span></sup>
                                          <span className="price"> 25 </span>
                                          <span className="subscription"> / Monthly </span>
                                       </div>
                                    </div>
                                    <h5>I have a dream</h5>
                                </div>
                                <div className="pricing-body mb-40 text-left">
                                    
									<ul>
										<li>1000+ projets</li>
										<li>No transaction fees</li>
										<li>Unlimited Storage</li>
										<li>5 Download</li>
									</ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="btn">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- pricing-area-end -->
			
            <!-- testimonial-area --> */}
            <section id="testimonios" className="testimonial-area testimonial-p  pt-100 pb-70" style={{backgroundImage:'url(img/bg/client-bg.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center'}}>
                <div className="container">
                    <div className="row">    
                        <div className="col-lg-6">
                             <div className="section-title center-align">                              
                                <h2>What Our Clients Say’s</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                           
                            <div className="testimonial-active">
                                <div className="col-xl-4">
                                    <div className="single-testimonial">
                                        <div className="testi-author text-left">
                                            <img src="img/testimonial/testi_avatar.png" alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mr Jone Dose</h6>
                                                <span>Author</span>
                                            </div>
                                        </div>
                                        <div className="qutation"><img src="img/bg/qutation.png" alt="qutation.png"/></div>
                                        
                                        <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>
                                        
                                    </div>
                                </div>
                                 <div className="col-xl-4">
                                    <div className="single-testimonial">
                                       <div className="testi-author text-left">
                                            <img src="img/testimonial/testi_avatar2.png" alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mr Jone Dose</h6>
                                                <span>Author</span>
                                            </div>
                                        </div>
                                         <div className="qutation"><img src="img/bg/qutation.png" alt="qutation.png"/></div>
                                         <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>
                                        
                                       
                                    </div>
                                </div>
                                 <div className="col-xl-4">
                                    <div className="single-testimonial">
                                         <div className="testi-author text-left">
                                            <img src="img/testimonial/testi_avatar3.png" alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mr Jone Dose</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                         <div className="qutation"><img src="img/bg/qutation.png" alt="qutation.png"/></div>
                                        <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>
                                        
                                    </div>
                                </div>
                                 <div className="col-xl-4">
                                    <div className="single-testimonial">
                                        <div className="testi-author text-left">
                                            <img src="img/testimonial/testi_avatar.png" alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mr Jone Dose</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                        <div className="qutation"><img src="img/bg/qutation.png" alt="qutation.png"/></div>
                                         <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>
                                        
                                    </div>
                                </div>
                                 <div className="col-xl-4">
                                    <div className="single-testimonial">
                                        <div className="testi-author text-left">
                                            <img src="img/testimonial/testi_avatar2.png" alt="img"/>
                                            <div className="ta-info">
                                                <h6>Mr Jone Dose</h6>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                        <div className="qutation"><img src="img/bg/qutation.png" alt="qutation.png"/></div>
                                        <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>
                                        
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
						
                    </div>
                </div>
            </section>
            {/* <!-- testimonial-area-end -->
           
           
            <!-- blog-area --> */}
            <section id="blog" className="blog-area p-relative pt-70" style={{backgroundImage: 'url(img/shape/header-sape8.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title text-center mb-50">                               
                                <h2>Our Latest Blog & News</h2>
                                <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-post mb-30">
                                <div className="blog-thumb">
                                    <a href="blog-details.html"><img src="img/blog/inner_b1.jpg" alt="img"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="b-meta mb-40">
                                        <ul>                                           
                                            <li><a href="#">20 jan 2019</a></li>                                            
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">Making Distribut Product Team
                                    Work More With Monday</a></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisi
                                    cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="admin">
                                            <ul>
                                                <li><img src="img/blog/admin-img.png" alt="test"/></li>
                                                <li><h6>Jhon Abraham</h6> Author</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                             <div className="single-post mb-30">
                                <div className="blog-thumb">
                                    <a href="blog-details.html"><img src="img/blog/inner_b2.jpg" alt="img"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="b-meta mb-40">
                                        <ul>                                           
                                            <li><a href="#">20 jan 2019</a></li>                                         
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">Monthly Web Development Upto Cost Of JavaScript Ethics</a></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisi
                                    cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="admin">
                                            <ul>
                                                 <li><img src="img/blog/admin-img.png" alt="test"/></li>
                                                <li><h6>Jhon Abraham</h6> Author</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                             <div className="single-post mb-30">
                                <div className="blog-thumb">
                                    <a href="blog-details.html"><img src="img/blog/inner_b3.jpg" alt="img"/></a>
                                </div>
                                <div className="blog-content">
                                    <div className="b-meta mb-40">
                                        <ul>                                           
                                            <li><a href="#">20 jan 2019</a></li>
                                        </ul>
                                    </div>
                                    <h4><a href="blog-details.html">User Experience Psychology And Performance Smashing</a></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisi
                                    cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                     <div className="admin">
                                            <ul>
                                                 <li><img src="img/blog/admin-img.png" alt="test"/></li>
                                                <li><h6>Jhon Abraham</h6> Author</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- blog-area-end -->
			
            <!-- contact-area --> */}
            <section id="contact" className="contact-area contact-bg  pt-50 pb-100 p-relative fix"  style={{backgroundImage: 'url(img/shape/header-sape8.png)', backgroundPosition: 'right center', backgroundSize: 'auto',backgroundRepeat: 'no-repeat'}}>
                <div className="container">
             
					<div className="row">
						<div className="col-lg-6">
                            <div className="contact-img2">
                                <img src="img/bg/illustration.png" alt="test"/>
                            </div>						
						</div>
						<div className="col-lg-6">
                            <div className="section-title mb-40">                              
                                <h2>Get In Tuch</h2>
                                  <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                            </div>
						<form action="#" className="contact-form">
							<div className="row">
                            <div className="col-lg-12">
                                <div className="contact-field p-relative c-name mb-20">                                    
                                    <input type="text" placeholder="Name"/>
                                </div>                               
                            </div>
							 <div className="col-lg-12">                    
                                <div className="contact-field p-relative c-email mb-20">                                    
                                    <input type="text" placeholder="Email"/>
                                </div>                                
                            </div>
							 <div className="col-lg-12">                      
                                <div className="contact-field p-relative c-subject mb-20">                                   
                                    <input type="text" placeholder="Phone"/>
                                </div>
                            </div>
							
                            <div className="col-lg-12">
                                <div className="contact-field p-relative c-message mb-45">                                  
                                    <textarea name="message" id="message" cols="10" rows="10" placeholder="Write comments"></textarea>
                                </div>
                                <button className="btn">Send Message</button>
                            </div>
                            </div>
                        
                    </form>
						</div>
					</div>
                    
                </div>
               
            </section>
            {/* <!-- contact-area-end --> */}
        </main>
  );
}

export default App;
