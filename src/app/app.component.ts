import { Component } from '@angular/core';
import { Ipara } from "./para/para.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: ['ParaComponent']
})

export class AppComponent {
  title = 'app';
   parallaxText: Ipara = {
     heading:"Protect Your Family With Insurance.",
    para1:"I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    para2:""
  }
  text1:Ipara={
    heading: "This is heading element",
    para1: "From insurance website research, we have got that an insurance website should have service section to show its provided insurances services in front of their visitors. this insurance theme has a credible Service section that can help you to do convert your visitors into real clients. So, you can use this WP theme effortlessly.",
    para2: "You will be glad to know that you can customize your website according to your demand. Further, you don’ need to do any programming on coding skill.  You will be able to change for any kind of customization using theme customizer. By using color options, you can change the color according to your need. You can change any section from your site without any troubles. In Insurance Now Pro theme, we have added one-click demo installation. You can make your website like our demo with the help of one-click demo installation.So, this feature will save your valuable time."
  }
  text2:Ipara = {
    heading:"How We Can Help",
    para1:"We offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.",
    para2:"As we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save."
  }
  text3:Ipara={
    heading:"This is heading element",
    para1:"We offer a wealth of other insurance products including Home Insurance, Travel Insurance, Pet Insurance and Van Insurance. This means that we can offer all your insurance needs in one place and with our existing customer discounts we could save you time and money.",
    para2:"As we were voted Best Insurance Provider by consumers four years running you know that you are in good hands with us. Every 12 seconds a new customer joins our insurance Group, get a quote today and see how much you could save."
  }
  text4:Ipara = {
    heading:"Where To Find Us",
    para1:"We are located in Palo Alto, California. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    para2: "Our Business,19633 Sandhill Rd.,Palo Alto CA 90423"
  }
}

