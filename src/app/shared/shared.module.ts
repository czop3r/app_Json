import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";

@NgModule ({
    declarations: [

    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule
    ]
})
export class SharedModule {}
