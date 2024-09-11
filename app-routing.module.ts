import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DesignComponent } from './design/design.component';
import { Design3Component } from './design3/design3.component';
import { ModelSwitcherComponent } from './model-switcher/model-switcher.component';


const routes: Routes = [
  {path: '', redirectTo: 'front', pathMatch: 'full' },
  {path: 'front', component:FrontComponent },
  {path: 'about', component:AboutComponent },

  {path: '', redirectTo: 'front', pathMatch: 'full' },
  {path: 'front', component:FrontComponent },
  {path: 'blog', component:BlogComponent },

  {path: '', redirectTo: 'front', pathMatch: 'full' },
  {path: 'front', component:FrontComponent },
  {path: 'service', component:ServiceComponent },

  {path: '', redirectTo: 'front', pathMatch: 'full' },
  {path: 'front', component:FrontComponent },
  {path: 'content', component:ContentComponent },

  {path: '', redirectTo: 'front', pathMatch: 'full' },
  {path: 'front', component:FrontComponent },
  {path: 'login', component:LoginComponent },

  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'front', component:FrontComponent },

  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },

  {path: '', redirectTo: 'register', pathMatch: 'full' },
  {path: 'register', component:RegisterComponent },
  {path: 'login', component:LoginComponent },

  {path: '', redirectTo: 'register', pathMatch: 'full' },
  {path: 'register', component:RegisterComponent },
  {path: 'front', component:FrontComponent },

  {path: '', redirectTo: 'design', pathMatch: 'full' },
  {path: 'design', component:DesignComponent },
  {path: 'service1', component:ServiceComponent },

  {path: '', redirectTo: 'service', pathMatch: 'full' },
  {path: 'service1', component:ServiceComponent },
  {path: 'design', component:DesignComponent },
  

  {path: '', redirectTo: 'service1', pathMatch: 'full' },
  {path: 'service', component:ServiceComponent },
  {path: 'model-switcher', component:ModelSwitcherComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }