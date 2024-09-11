import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontComponent } from './front/front.component';
import { ContentComponent } from './content/content.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DesignComponent } from './design/design.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Design3Component } from './design3/design3.component';
import { ModelSwitcherComponent } from './model-switcher/model-switcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignColorService } from './design-color.service';
import { DesignModelService } from './design-model.service';
import { DesignShirtService } from './design-shirt.service';



@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ContentComponent,
    ServiceComponent,
    AboutComponent,
    BlogComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DesignComponent,
    Design3Component,
    ModelSwitcherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { 

}
