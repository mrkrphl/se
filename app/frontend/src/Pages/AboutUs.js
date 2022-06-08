import banner from "../images/banner.JPG"
function AboutUs(){
    return(
        <div>
            <header class="header">
                <div class="nav">
                    <h1 class="logo">
                        <a href="#">*placeholder</a> 
                    </h1>
                    <ul class="navlinks">
                        <li> 
                            <a href="#">About Us</a>
                        </li>  
                        <li> 
                            <a href="#">Contact Us</a>
                        </li> 
                    </ul>
                    <div class="signin">
                        <a href="#">Sign In</a>
                    </div>
                    <div class="signout">
                        <a href="#">Sign Out</a>
                    </div>
                </div>
            </header>
            <div class="banner">
                <a href="#"><img src={banner}/></a>
            </div>
            <main class="main">
                <h2> About Us</h2>
                <div class="info">
                    <h3> History</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus. Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p> 
                </div>
                
                <div class="container">
                    <div class="info">
                        <h3> Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus. Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p> 
                    </div>
                    <div class="info">
                        <h3> Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus. Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p> 
                    </div>
                </div>
                    <div class="info">
                        <h3> Objectives</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper in ex at dignissim. Aenean interdum, ex sed accumsan cursus, mi turpis euismod erat, sed convallis magna ex ut eros. Nullam lorem libero, fermentum at eleifend quis, cursus posuere libero. Donec non imperdiet lacus. Vestibulum rutrum mauris ac sem finibus, in convallis purus malesuada. Mauris ligula metus, ultrices quis augue eu, sagittis ultricies tellus. Quisque finibus, nisl nec ornare mattis, ipsum lacus elementum neque, vestibulum bibendum mi magna ut orci. Sed porta auctor ante. Mauris commodo, velit vitae venenatis euismod, enim nulla dignissim nisi, quis lacinia lorem ligula a ante. Nunc et magna egestas risus tempor volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque laoreet purus. Etiam semper hendrerit ex, ut pretium dui sollicitudin vel. </p> 
                    </div>
            </main>
            
            <div class="footer">
                <p>©2022 A Gateway to Open Access Legal Resources in the Philippines All rights reserved. <a href="#">Contact Us</a></p>
            </div>
        </div>
    );
}

export default AboutUs;