import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  async ngOnInit() {
    console.log("hdjhb")
    await this.loadJsFile('assets/vendors/bootstrap/js/bootstrap.bundle.min.js');
    await this.loadJsFile('assets/js/jquery.min.js');
    await this.loadJsFile('assets/js/swiper.min.js');
    await this.loadJsFile('assets/vendors/jarallax/jarallax.min.js');
    await this.loadJsFile('assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js');
    await this.loadJsFile('assets/vendors/nouislider/nouislider.min.js');
    await this.loadJsFile('assets/vendors/owl-carousel/js/owl.carousel.min.js');
    await this.loadJsFile('assets/vendors/wow/wow.js');
    await this.loadJsFile('assets/js/owl.carousel.min.js');
    await this.loadJsFile('assets/js/parallaxie.min.js');
    await this.loadJsFile('assets/js/slick.js');
    await this.loadJsFile('assets/js/slick.min.js');
    await this.loadJsFile('assets/js/greenlotus.js');
    await this.loadJsFile('assets/js/slider.js');
  }

  async loadJsFile(url: any) {
    console.log("hasbcj")
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    this.renderer.appendChild(this.document.body, script);
    return Promise.resolve(true);
  }

}
