import { Component, OnInit, HostListener } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new Weather().Items;
  deferredPrompt: any;
  showButton = false;
  sunrise = '';
  sunset = '';
  weatherico = '';
  citty = '';
  degrees = '';
  feelsLike = '';

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showButton = true;
  }
  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    this.showButton = false;
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        this.deferredPrompt = null;
      });
  }
  constructor(private restService: RestApiService) { }

  ngOnInit(): void {
    this.restService.getWeather().subscribe(s=> {
      console.log(s);
      this.data = s;
      if(s.city){
      if (s.city.sunrise)
        this.sunrise = this.convertTicksToTime(s.city.sunrise);
      if (s.city.sunrise)
        this.sunset = this.convertTicksToTime(s.city.sunset);
        this.citty = s.city.name;
      }

      const nextThreeHours = s.list[0];
      if(nextThreeHours.weather){
        console.log(nextThreeHours.weather);
        this.weatherico = "http://openweathermap.org/img/wn/"+ nextThreeHours.weather[0].icon+"@2x.png";
      }
      if (nextThreeHours.main){
        this.degrees = nextThreeHours.main.degrees;
        this.feelsLike = nextThreeHours.main.feelsLike;
      }

    });
  }
  
  private pad2(number) {
    number = '0' + number;
    return number.substr(number.length - 2);
  }
  
  convertTicksToTime(ticks: number) : string {
    // Assume milliseconds for now
    var seconds = Math.floor(ticks / 1000);
    console.log(seconds);
    var hour = Math.floor((seconds / 3600) % 24);
    var minute = Math.floor((seconds / 60) % 60);
    var second = seconds % 60;
  
    return  this.pad2(hour) + ':' + this.pad2(minute) + ':' + this.pad2(second)
  }
}

export class Weather {
  Items = {"cod":"200","message":0,"cnt":40,"list":[{"dt":1585396800,"main":{"temp":283.87,"feels_like":281.22,"temp_min":283.87,"temp_max":284.03,"pressure":1012,"sea_level":1012,"grnd_level":929,"humidity":48,"temp_kf":-0.16},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":91},"wind":{"speed":0.98,"deg":126},"rain":{"3h":0.3},"sys":{"pod":"d"},"dt_txt":"2020-03-28 12:00:00"},{"dt":1585407600,"main":{"temp":283.05,"feels_like":280.02,"temp_min":283.05,"temp_max":283.17,"pressure":1011,"sea_level":1011,"grnd_level":928,"humidity":54,"temp_kf":-0.12},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":93},"wind":{"speed":1.71,"deg":171},"rain":{"3h":1.25},"sys":{"pod":"d"},"dt_txt":"2020-03-28 15:00:00"},{"dt":1585418400,"main":{"temp":279.25,"feels_like":276.6,"temp_min":279.25,"temp_max":279.33,"pressure":1012,"sea_level":1012,"grnd_level":928,"humidity":66,"temp_kf":-0.08},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":95},"wind":{"speed":1,"deg":149},"rain":{"3h":0.93},"sys":{"pod":"n"},"dt_txt":"2020-03-28 18:00:00"},{"dt":1585429200,"main":{"temp":278.37,"feels_like":275.88,"temp_min":278.37,"temp_max":278.41,"pressure":1013,"sea_level":1013,"grnd_level":929,"humidity":70,"temp_kf":-0.04},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":86},"wind":{"speed":0.76,"deg":185},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-03-28 21:00:00"},{"dt":1585440000,"main":{"temp":277.93,"feels_like":275.44,"temp_min":277.93,"temp_max":277.93,"pressure":1013,"sea_level":1013,"grnd_level":928,"humidity":70,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"αυξημένες νεφώσεις","icon":"04n"}],"clouds":{"all":89},"wind":{"speed":0.68,"deg":259},"sys":{"pod":"n"},"dt_txt":"2020-03-29 00:00:00"},{"dt":1585450800,"main":{"temp":277.42,"feels_like":274.72,"temp_min":277.42,"temp_max":277.42,"pressure":1013,"sea_level":1013,"grnd_level":928,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"αυξημένες νεφώσεις","icon":"04n"}],"clouds":{"all":91},"wind":{"speed":0.83,"deg":268},"sys":{"pod":"n"},"dt_txt":"2020-03-29 03:00:00"},{"dt":1585461600,"main":{"temp":279.54,"feels_like":277.07,"temp_min":279.54,"temp_max":279.54,"pressure":1012,"sea_level":1012,"grnd_level":928,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"αραιές νεφώσεις","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":0.76,"deg":293},"sys":{"pod":"d"},"dt_txt":"2020-03-29 06:00:00"},{"dt":1585472400,"main":{"temp":284.5,"feels_like":282.06,"temp_min":284.5,"temp_max":284.5,"pressure":1012,"sea_level":1012,"grnd_level":930,"humidity":48,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"σποραδικές νεφώσεις","icon":"03d"}],"clouds":{"all":49},"wind":{"speed":0.81,"deg":314},"sys":{"pod":"d"},"dt_txt":"2020-03-29 09:00:00"},{"dt":1585483200,"main":{"temp":286.61,"feels_like":284.48,"temp_min":286.61,"temp_max":286.61,"pressure":1011,"sea_level":1011,"grnd_level":929,"humidity":41,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":43},"wind":{"speed":0.3,"deg":330},"rain":{"3h":0.22},"sys":{"pod":"d"},"dt_txt":"2020-03-29 12:00:00"},{"dt":1585494000,"main":{"temp":285.7,"feels_like":283.62,"temp_min":285.7,"temp_max":285.7,"pressure":1010,"sea_level":1010,"grnd_level":928,"humidity":45,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":67},"wind":{"speed":0.34,"deg":188},"rain":{"3h":0.31},"sys":{"pod":"d"},"dt_txt":"2020-03-29 15:00:00"},{"dt":1585504800,"main":{"temp":281.06,"feels_like":278.79,"temp_min":281.06,"temp_max":281.06,"pressure":1011,"sea_level":1011,"grnd_level":927,"humidity":63,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":0.69,"deg":178},"rain":{"3h":0.22},"sys":{"pod":"n"},"dt_txt":"2020-03-29 18:00:00"},{"dt":1585515600,"main":{"temp":280.01,"feels_like":277.49,"temp_min":280.01,"temp_max":280.01,"pressure":1011,"sea_level":1011,"grnd_level":927,"humidity":64,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"σποραδικές νεφώσεις","icon":"03n"}],"clouds":{"all":35},"wind":{"speed":0.87,"deg":121},"sys":{"pod":"n"},"dt_txt":"2020-03-29 21:00:00"},{"dt":1585526400,"main":{"temp":278.94,"feels_like":276.54,"temp_min":278.94,"temp_max":278.94,"pressure":1011,"sea_level":1011,"grnd_level":927,"humidity":67,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"ελαφρές νεφώσεις","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":0.62,"deg":141},"sys":{"pod":"n"},"dt_txt":"2020-03-30 00:00:00"},{"dt":1585537200,"main":{"temp":278.41,"feels_like":276.01,"temp_min":278.41,"temp_max":278.41,"pressure":1011,"sea_level":1011,"grnd_level":926,"humidity":69,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"ελαφρές νεφώσεις","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":0.6,"deg":71},"sys":{"pod":"n"},"dt_txt":"2020-03-30 03:00:00"},{"dt":1585548000,"main":{"temp":280.9,"feels_like":278.31,"temp_min":280.9,"temp_max":280.9,"pressure":1010,"sea_level":1010,"grnd_level":927,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"αραιές νεφώσεις","icon":"04d"}],"clouds":{"all":53},"wind":{"speed":1.26,"deg":80},"sys":{"pod":"d"},"dt_txt":"2020-03-30 06:00:00"},{"dt":1585558800,"main":{"temp":284.49,"feels_like":281.42,"temp_min":284.49,"temp_max":284.49,"pressure":1010,"sea_level":1010,"grnd_level":928,"humidity":53,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.02,"deg":114},"rain":{"3h":0.13},"sys":{"pod":"d"},"dt_txt":"2020-03-30 09:00:00"},{"dt":1585569600,"main":{"temp":285.91,"feels_like":282.51,"temp_min":285.91,"temp_max":285.91,"pressure":1008,"sea_level":1008,"grnd_level":926,"humidity":48,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.47,"deg":121},"rain":{"3h":0.4},"sys":{"pod":"d"},"dt_txt":"2020-03-30 12:00:00"},{"dt":1585580400,"main":{"temp":283.79,"feels_like":280.59,"temp_min":283.79,"temp_max":283.79,"pressure":1007,"sea_level":1007,"grnd_level":924,"humidity":57,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":2.3,"deg":128},"rain":{"3h":0.51},"sys":{"pod":"d"},"dt_txt":"2020-03-30 15:00:00"},{"dt":1585591200,"main":{"temp":280.98,"feels_like":278.3,"temp_min":280.98,"temp_max":280.98,"pressure":1008,"sea_level":1008,"grnd_level":925,"humidity":68,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":1.51,"deg":112},"rain":{"3h":1.13},"sys":{"pod":"n"},"dt_txt":"2020-03-30 18:00:00"},{"dt":1585602000,"main":{"temp":280.08,"feels_like":277.32,"temp_min":280.08,"temp_max":280.08,"pressure":1009,"sea_level":1009,"grnd_level":925,"humidity":68,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":1.42,"deg":94},"rain":{"3h":0.47},"sys":{"pod":"n"},"dt_txt":"2020-03-30 21:00:00"},{"dt":1585612800,"main":{"temp":279.03,"feels_like":276.6,"temp_min":279.03,"temp_max":279.03,"pressure":1008,"sea_level":1008,"grnd_level":924,"humidity":68,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":0.72,"deg":67},"rain":{"3h":1.45},"sys":{"pod":"n"},"dt_txt":"2020-03-31 00:00:00"},{"dt":1585623600,"main":{"temp":278.5,"feels_like":276.08,"temp_min":278.5,"temp_max":278.5,"pressure":1009,"sea_level":1009,"grnd_level":925,"humidity":69,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":0.65,"deg":28},"rain":{"3h":0.36},"sys":{"pod":"n"},"dt_txt":"2020-03-31 03:00:00"},{"dt":1585634400,"main":{"temp":279.51,"feels_like":276.9,"temp_min":279.51,"temp_max":279.51,"pressure":1009,"sea_level":1009,"grnd_level":925,"humidity":66,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":1,"deg":26},"rain":{"3h":0.5},"sys":{"pod":"d"},"dt_txt":"2020-03-31 06:00:00"},{"dt":1585645200,"main":{"temp":280.94,"feels_like":278.06,"temp_min":280.94,"temp_max":280.94,"pressure":1010,"sea_level":1010,"grnd_level":927,"humidity":63,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":1.54,"deg":7},"rain":{"3h":0.24},"sys":{"pod":"d"},"dt_txt":"2020-03-31 09:00:00"},{"dt":1585656000,"main":{"temp":282.79,"feels_like":280.44,"temp_min":282.79,"temp_max":282.79,"pressure":1010,"sea_level":1010,"grnd_level":927,"humidity":57,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":0.86,"deg":0},"rain":{"3h":0.25},"sys":{"pod":"d"},"dt_txt":"2020-03-31 12:00:00"},{"dt":1585666800,"main":{"temp":284.3,"feels_like":281.59,"temp_min":284.3,"temp_max":284.3,"pressure":1010,"sea_level":1010,"grnd_level":927,"humidity":53,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":96},"wind":{"speed":1.47,"deg":71},"rain":{"3h":0.23},"sys":{"pod":"d"},"dt_txt":"2020-03-31 15:00:00"},{"dt":1585677600,"main":{"temp":280.27,"feels_like":278.16,"temp_min":280.27,"temp_max":280.27,"pressure":1012,"sea_level":1012,"grnd_level":928,"humidity":65,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":79},"wind":{"speed":0.39,"deg":238},"rain":{"3h":0.3},"sys":{"pod":"n"},"dt_txt":"2020-03-31 18:00:00"},{"dt":1585688400,"main":{"temp":279.99,"feels_like":277.1,"temp_min":279.99,"temp_max":279.99,"pressure":1014,"sea_level":1014,"grnd_level":930,"humidity":67,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":75},"wind":{"speed":1.54,"deg":335},"rain":{"3h":1},"sys":{"pod":"n"},"dt_txt":"2020-03-31 21:00:00"},{"dt":1585699200,"main":{"temp":278.89,"feels_like":276.91,"temp_min":278.89,"temp_max":278.89,"pressure":1014,"sea_level":1014,"grnd_level":930,"humidity":70,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10n"}],"clouds":{"all":72},"wind":{"speed":0.14,"deg":354},"rain":{"3h":0.5},"sys":{"pod":"n"},"dt_txt":"2020-04-01 00:00:00"},{"dt":1585710000,"main":{"temp":278.53,"feels_like":276.53,"temp_min":278.53,"temp_max":278.53,"pressure":1014,"sea_level":1014,"grnd_level":929,"humidity":70,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"αραιές νεφώσεις","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":0.09,"deg":263},"sys":{"pod":"n"},"dt_txt":"2020-04-01 03:00:00"},{"dt":1585720800,"main":{"temp":279.69,"feels_like":277.11,"temp_min":279.69,"temp_max":279.69,"pressure":1014,"sea_level":1014,"grnd_level":930,"humidity":67,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":75},"wind":{"speed":1.03,"deg":197},"rain":{"3h":0.14},"sys":{"pod":"d"},"dt_txt":"2020-04-01 06:00:00"},{"dt":1585731600,"main":{"temp":282.49,"feels_like":278.22,"temp_min":282.49,"temp_max":282.49,"pressure":1014,"sea_level":1014,"grnd_level":930,"humidity":55,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":77},"wind":{"speed":3.43,"deg":218},"rain":{"3h":0.55},"sys":{"pod":"d"},"dt_txt":"2020-04-01 09:00:00"},{"dt":1585742400,"main":{"temp":281.1,"feels_like":277.62,"temp_min":281.1,"temp_max":281.1,"pressure":1014,"sea_level":1014,"grnd_level":930,"humidity":52,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"ασθενείς βροχοπτώσεις","icon":"10d"}],"clouds":{"all":71},"wind":{"speed":1.88,"deg":311},"rain":{"3h":0.91},"sys":{"pod":"d"},"dt_txt":"2020-04-01 12:00:00"},{"dt":1585753200,"main":{"temp":278.33,"feels_like":274.97,"temp_min":278.33,"temp_max":278.33,"pressure":1014,"sea_level":1014,"grnd_level":929,"humidity":57,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"αραιές νεφώσεις","icon":"04d"}],"clouds":{"all":70},"wind":{"speed":1.45,"deg":342},"sys":{"pod":"d"},"dt_txt":"2020-04-01 15:00:00"},{"dt":1585764000,"main":{"temp":275.2,"feels_like":271.24,"temp_min":275.2,"temp_max":275.2,"pressure":1016,"sea_level":1016,"grnd_level":930,"humidity":62,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"ήπιες χιονοπτώσεις","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":2.01,"deg":344},"snow":{"3h":0.26},"sys":{"pod":"n"},"dt_txt":"2020-04-01 18:00:00"},{"dt":1585774800,"main":{"temp":273.14,"feels_like":269.26,"temp_min":273.14,"temp_max":273.14,"pressure":1018,"sea_level":1018,"grnd_level":931,"humidity":68,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"ήπιες χιονοπτώσεις","icon":"13n"}],"clouds":{"all":46},"wind":{"speed":1.79,"deg":327},"snow":{"3h":0.14},"sys":{"pod":"n"},"dt_txt":"2020-04-01 21:00:00"},{"dt":1585785600,"main":{"temp":271.85,"feels_like":268.06,"temp_min":271.85,"temp_max":271.85,"pressure":1018,"sea_level":1018,"grnd_level":931,"humidity":70,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"σποραδικές νεφώσεις","icon":"03n"}],"clouds":{"all":27},"wind":{"speed":1.53,"deg":352},"sys":{"pod":"n"},"dt_txt":"2020-04-02 00:00:00"},{"dt":1585796400,"main":{"temp":271.77,"feels_like":267.99,"temp_min":271.77,"temp_max":271.77,"pressure":1018,"sea_level":1018,"grnd_level":931,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"αίθριος καιρός","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.48,"deg":26},"sys":{"pod":"n"},"dt_txt":"2020-04-02 03:00:00"},{"dt":1585807200,"main":{"temp":274.82,"feels_like":271.18,"temp_min":274.82,"temp_max":274.82,"pressure":1018,"sea_level":1018,"grnd_level":932,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"αίθριος καιρός","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.34,"deg":37},"sys":{"pod":"d"},"dt_txt":"2020-04-02 06:00:00"},{"dt":1585818000,"main":{"temp":279.8,"feels_like":275.87,"temp_min":279.8,"temp_max":279.8,"pressure":1018,"sea_level":1018,"grnd_level":933,"humidity":42,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"αίθριος καιρός","icon":"01d"}],"clouds":{"all":2},"wind":{"speed":1.84,"deg":117},"sys":{"pod":"d"},"dt_txt":"2020-04-02 09:00:00"}],"city":{"id":257083,"name":"Korydallos","coord":{"lat":39.8089,"lon":21.343},"country":"GR","population":3304,"timezone":7200,"sunrise":1585369479,"sunset":1585414459}}
}