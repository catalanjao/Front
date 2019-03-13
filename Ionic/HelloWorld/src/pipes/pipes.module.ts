import { NgModule } from '@angular/core';
import { Elpipe1Pipe } from './elpipe1/elpipe1';
import { Elpipe2Pipe } from './elpipe2/elpipe2';
@NgModule({
	declarations: [Elpipe1Pipe,
    Elpipe2Pipe],
	imports: [],
	exports: [Elpipe1Pipe,
    Elpipe2Pipe]
})
export class PipesModule {}
