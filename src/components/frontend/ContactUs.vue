<template>
  <div id="contact" class="contact-us">
    <div class="container">
        <div class="section-header">
            <h3 id="contact-header">CONTACT <span class="office-name">Home <span class="split-title"> Tutor </span>  Finder</span></h3>
        </div>

        <div class="row wow fadeInUp" style="animation-name: none;">
            <div class="col-lg-6 col-md-12">
                <div>
                    <div class="info-item">
                        <div class="icon">
                            <div class="icon-wrapper icon-background icon-circle" style="border-color:#b7282a;">
                                <i class="fa fa-map-marker"></i>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Address</h4>
                            <p>Pokhara engineering Road firke</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon">
                            <div class="icon-wrapper icon-background icon-circle" style="border-color:#b7282a;">
                                <i class="fa fa-envelope"></i>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Email</h4>
                            <p>codesastra@gmail.com</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon">
                            <div class="icon-wrapper icon-background icon-circle" style="border-color:#b7282a;">
                                <i class="fa fa-phone"></i>
                            </div>
                        </div>
                        <div class="info">
                            <h4>Phone</h4>
                            <p>1234567890 <br> 061530625 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form">

                    <div id="sendmessage">                            </div>

                    <div id="errormessage"></div>
                    <form method="post" onsubmit="return recaptchavalidation();" action="mail/sendmail.php" role="form" class="contactForm">
                        <div class="form-row">
                            <div class="form-group col-lg-6">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required="">
                                <div class="validation"></div>
                            </div>
                            <div class="form-group col-lg-6">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required="">
                                <div class="validation"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required="">
                            <div class="validation"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" required=""></textarea>
                            <div class="validation"></div>
                        </div>

                            <div class="form-group">
                            <!-- Google reCAPTCHA box -->
                        <div class="g-recaptcha" data-sitekey="6Lf9MLIUAAAAAB-KLVfok7FYptPIr3ePCZb-_E75" data-callback="recaptchaCallback"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf9MLIUAAAAAB-KLVfok7FYptPIr3ePCZb-_E75&amp;co=aHR0cDovL25ldy5jb2Rlc2FzdHJhLmNvbTo4MA..&amp;hl=en&amp;v=61bII03-TtCmSUR7dw9MJF9q&amp;size=normal&amp;cb=yz0a4n27ylej" width="304" height="78" role="presentation" name="a-48p7403mf6up" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe __idm_frm__="2895" style="display: none;"></iframe></div>
                        </div>
                        

                        

                        <input type="submit" id="btnSubmit" class="btn btn-primary" value="Send Message">
                    </form>
                </div>
            </div>

        </div>
    </div>
        <!-- <section id="map">
            <div class="container-fluid">
                <div class="row wow fadeInUp" style="animation-name: none;">

                    <div class="col-lg-12">
                        <div class="map mb-4 mb-lg-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.841170504489!2d83.97528681548262!3d28.21213778258559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595aac06d55bf%3A0xde908bd5347d6c9a!2sCode+Sastra+Private+Limited!5e0!3m2!1sen!2snp!4v1564642778302!5m2!1sen!2snp" frameborder="0" style="border:0; width: 100%; height: 400px;" allowfullscreen=""></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </section> -->
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#contact {
    /* box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1); */
    box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
    /* background: #f28b35; */
    padding: 60px 0;
    overflow: hidden;
    visibility: true;
}
.contact-header {
    display: block;
    box-sizing: border-box;
}
.info{
    /* float:right; */
    display:inline-block;
    
}
.info-item {
    display: block;
    
    margin-top: 16px;
}
.icon {
    /* float: left; */
    display:inline-flex;
}
.icon-circle {
    height: 50px;
    width: 50px;
    background-color: rgb(30, 145, 81);
    border-radius: 50%;
    display: inline-block;
}
.icon i {
    font-size: 32px;
    color: #ffffff;
    /* text-align: center; */
    /* vertical-align: middle; */
    /* line-height: 1; */
    margin-left: 20%;
    margin-top: 16%;
}
</style>