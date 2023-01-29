import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('btnMenu') MybtnMenu!: ElementRef;
  @ViewChild('nav') MyNav!: ElementRef;

  public getScreenWidth = window.innerWidth;
  public getScreenHeight = window.innerHeight;

  

  navegacion: Array<any> = [
    {
      title:'Inicio',
      link:'/',
      activo: true,
    },
    {
      title:'Lista',
      link:'/list',
      activo: false,
    },
    {
      title:'Estadios',
      link:'/estadios',
      activo: false,
    },
    {
      title:'Ligas',
      link:'/ligas',
      activo: false,
    },
    {
      title:'Confederaciones',
      link:'/confederaciones',
      activo: false,
    }
  ];

  @HostListener('window:resize', ['$event'])
  onWindowResize(event:any) {
    // CM: Cada vez que el tamaño de la pantalla cambie, los valores cambiaran
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.redimensionarNav();
  };

  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.redimensionarNav();
  }

  activarBoton(n:number) {
    this.navegacion.forEach((element, index) => {
      if (index === n) {
        element.activo = true;
      } else {
        element.activo = false;
      }
    });
  };

  redimensionarNav() {
    const btnMenu = this.MybtnMenu.nativeElement;
    const nav = this.MyNav.nativeElement;

    // CM: Si el tamaño de la pantalla es menor a 768px, se ejecutara el codigo
    if (this.getScreenWidth < 768) {
      this.renderer2.setStyle(btnMenu, 'display','flex');
      this.renderer2.addClass(nav, 'nav-responsive');
    } else {
      this.renderer2.setStyle(btnMenu, 'display','none');
      this.renderer2.removeClass(nav, 'nav-responsive');
    }
  }

}
