import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  conditionEn: boolean=true;
  conditionUa: boolean=false;

  constructor(private translate: TranslateService, private authService: AuthService) {
    translate.setDefaultLang('en');
  }

  switchLanguageEn(language: string) {
    this.translate.use(language);
    this.conditionEn=true;
    this.conditionUa=false;
  }

  switchLanguageRu(language: string) {
    this.translate.use(language);
    this.conditionEn=false;
    this.conditionUa=true ;
  }

}
