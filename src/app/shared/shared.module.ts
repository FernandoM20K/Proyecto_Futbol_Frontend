import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardClubComponent } from './components/card-club/card-club.component';
import { SectionClubesComponent } from './components/section-clubes/section-clubes.component';
import { CortarTextoPipe } from './pipes/cortarTexto/cortar-texto.pipe';
import { JugadoresPipe } from './pipes/jugadores/jugadores.pipe';
import { CardEstadioComponent } from './components/card-estadio/card-estadio.component';
import { CardEntrenadorComponent } from './components/card-entrenador/card-entrenador.component';
import { RouterModule } from '@angular/router';
import { CardLigaComponent } from './components/card-liga/card-liga.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    CardPlayerComponent,
    SpinnerComponent,
    NavbarComponent,
    CardClubComponent,
    SectionClubesComponent,
    CortarTextoPipe,
    JugadoresPipe,
    CardEstadioComponent,
    CardEntrenadorComponent,
    CardLigaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    CardPlayerComponent,
    SpinnerComponent,
    NavbarComponent,
    CardClubComponent,
    SectionClubesComponent,
    CortarTextoPipe,
    JugadoresPipe,
    CardEstadioComponent,
    CardEntrenadorComponent,
    CardLigaComponent
  ]
})
export class SharedModule { }
