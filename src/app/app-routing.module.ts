import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { EodyComponent } from './eody/eody.component';
import { TweetsComponent } from './tweets/tweets.component';
import { ContactsComponent } from './contacts/contacts.component';



const routes: Routes = [{
  path:'',
  component: HomeComponent
},{
  path:'eody',
  component: EodyComponent
},
{
  path:'tweets',
  component: TweetsComponent

},
{
  path:'maps',
  component: MapsComponent
  
},
{
  path:'contacts',
  component: ContactsComponent
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
