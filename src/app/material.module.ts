import { NgModule } from "@angular/core";
import {MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule} from '@angular/material';




@NgModule({
    imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule],
    exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule, MatInputModule, MatFormFieldModule],
})

export class MaterialModule {}