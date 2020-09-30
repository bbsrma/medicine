<template>
    <div class="footer-main-container m-4">
        <!-- footer-image -->
        <div class="footer-image-container">
            <!-- <img src="~@/assets/hometutor-footer1.png" alt=""> -->
        </div>
        <!-- footer-image -->
        <div class="conrainer">
        <div class="row">
            <!-- logo section -->
            <div class="col-md-3">
                <div class="footer-logo">
                    <!-- <img src="~@/assets/Logo_Final13.png" alt=""> -->
                    <p>Footer Logo</p>
                </div>
                <div class="footer-logo-info"></div>
            </div>
            <!-- logo section -->
            <!-- quick links -->
            <div class="col-md-3">
                <div class="footer-header">Quick Link</div>
                <div class="footer-quick-links">
                    <a href="/"><i class="fa fa-home  mr-2"></i> Home</a>
                    <a href="/diseases"><i class="fa fa-graduation-cap mr-2"></i>Diseases</a>
                    <a href="/services"><i class="fa fa-address-book-o mr-3"></i>Services</a>
                    <a href="/contact"><i class="fa fa-comment-o mr-2"></i> Contact Us</a>
                </div>
            </div>
            <!-- quick links -->
            <!-- Search Find Tutor -->
            <div class="col-md-3">
                <div class="footer-header">Solutions </div>
                <div class="hire-tutor">
                    <button class="btn btn-outline-primary"> Search Disease <i class="fa fa-search"></i></button>
                    <button class="btn btn-outline-success"> Find Solution <i class="fa fa-graduation-cap"></i></button>
                    <button class="btn btn-outline-warning"> Contact <i class="fa fa-phone"></i></button>
                </div>
            </div>
            <!-- Search Find -->
            <div class="col-md-3">
                <div class="footer-header">Connect with us Through</div>
                <div class="footer-social-main-container">
                    <div class="footer-social-container" id="icon-facebook">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </div>
                    <div class="footer-social-container" id="icon-instagram">
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                    <div class="footer-social-container" id="icon-twitter">
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </div>
                    <div class="footer-social-container" id="icon-linkedin">
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <div class="footer-social-container" id="icon-google">
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                    </div>
                </div>
                <div class="contact-info">
                    <a href="#"><i class="fa fa-envelope"></i> Email: test@gmail.com</a>
                    <a href="#"><i class="fa fa-phone"></i> Phone: +06548451</a>
                </div>
            </div>
        </div>
        </div>
        <!-- copy right -->
        <div class="copyright-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="terms-conditions">
                            <a href="#">Terms And Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p>CopyRight 2020<i class="fa fa-copyright" aria-hidden="true"></i> </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- copy right -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-image-container img
{
    height: auto;
    width: 100%;
    margin-top: -15px;
}
.footer-header
{
    font-size: 22px;
    color: #56328c;
    font-weight: 1000;
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
}
.footer-logo
{
   display: flex;
   justify-content: center;
}
.footer-logo img
{
    height: auto;
    width: 60%;
}
.footer-logo-info p
{
    font-size: 18px;
    margin-left: 25px;
    font-weight: 550;
    font-family: 'Raleway', sans-serif;
}
.footer-quick-links
{
    margin-left: 96px;
}
.footer-quick-links a
{
    display: block;
    padding: 8px;
    font-size: 18px;
    font-weight: bolder;
    text-decoration: none;
    color: #c94a38;
}
.footer-quick-links a:hover
{
    color: #56328c;
}
.hire-tutor
{
    text-align: center;
}
.hire-tutor button
{
    display: block;
    width: 100%;  
    margin: 14px;
}
.footer-social-main-container
{
    margin-left: 64px;
}
.footer-social-container
{
    background: #ff5601;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    margin:5px;
    display: inline-flex;
}
.footer-social-container a
{
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
}
#icon-facebook
{
	background: #4a6fbe;
}
#icon-instagram
{
	background: #ea4c89;
}
#icon-linkedin
{
	background: #4a6fbe;
}
#icon-google
{
	background: #dd4b39;
}
#icon-twitter
{
    background: #00acee;
}
.contact-info 
{
    margin-left: 24px;
}
.contact-info a
{
    color: #c94a38;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding:10px;
    font-weight: bold;
}
.contact-info a:hover
{
    color: #56328c;
}
.copyright-section
{
    background: #0d1128;
    color: #ffffff;
    text-align: end;
    margin-top: 15px;
}
.copyright-section p
{
    margin-top: 15px;
    font-size: 16px;
}
.terms-conditions
{
    text-align: start;
    margin-top: 15px;
}
.terms-conditions a
{
    margin-top: 15px;
    color: #ffffff;
    margin-right: 25px;
    text-decoration: none;
}
</style>