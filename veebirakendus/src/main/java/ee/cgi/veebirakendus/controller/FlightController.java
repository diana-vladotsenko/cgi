package ee.cgi.veebirakendus.controller;

import ee.cgi.veebirakendus.Flight;
import ee.cgi.veebirakendus.repository.FlightRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/main")
public class FlightController {
    @Autowired
    FlightRepository flightRepository;

    @GetMapping
    public List<FLight> getAllData() {
        return flightRepository.findAll();
    }

    // @PostMapping
    // public List<Arv> addPerson(@RequestBody Arv arv) {
    //     arvRepository.save(arv);
    //     return arvRepository.findAll();
    // }

    // @GetMapping("/{id}")
    // public Arv getPersonById(@PathVariable Long id) {
    //     return arvRepository.findById(id)
    //             .orElseThrow(() -> new RuntimeException("ERROR_AGE_IS_NOT_FOUND"));
    // }

    // @DeleteMapping("/{id}")
    // public List<Arv> deletePersonById(@PathVariable Long id) {
    //     if (!arvRepository.existsById(id)) {
    //         throw new RuntimeException("ERROR_AGE_IS_NOT_FOUND");
    //     } else {
    //         arvRepository.deleteById(id);
    //         return arvRepository.findAll();
    //     }
    // }


    // //Tee lisaks kolm API otspunkti: 1) tagastab numbrina kГµikide andmebaasis olevate numbrite summa (tГ¤isnumber) 2) tagastab kГµikide andmebaasis olevate arvude aritmeetilise keskmise (komakohaga) 3) tagastab kГµige suurema numbri, mis andmebaasis leidub (tГ¤isnumber)
    // @GetMapping("/summa")
    // public int getSumma() {
    //     List<Arv> arvList = arvRepository.findAll();
    //     int sum = 0;
    //     for (Arv arv : arvList) {
    //         sum += arv.getAge();
    //     }
    //     return sum;
    // }

    // @GetMapping("/keskmine")
    // public int getKeskmine() {
    //     List<Arv> arvList = arvRepository.findAll();
    //     int sum = 0;
    //     for (Arv arv : arvList) {
    //         sum += arv.getAge();
    //     }
    //     int keskmine = sum/2;
    //     return keskmine;
    // }

    // @GetMapping("/maxArv")
    // public int geMaxArv() {
    //     List<Arv> arvList = arvRepository.findAll();
    //     if (arvList.isEmpty()) {
    //         return 0; 
    //     }
    //     int max = arvList.get(0).getAge();
    //     for (Arv arv : arvList) {
    //         if (arv.getAge() > max) {
    //             max = arv.getAge();
    //         }
    //     }
    // return max;
    // }

    // //* Koosta API otspunkt andmebaasis olevate arvude libiseva keskmise leidmiseks. VГ¤ljundiks on massiiv, mis on andmebaasis olevatest arvudest kahe elemendi vГµrra lГјhem ning mille iga elemendi vГ¤Г¤rtuseks on andmebaasis vastava elemendi ning selle jГ¤rgmise ja ГјlejГ¤rgmise elemendi keskmine. 

    // //РЎРѕР·РґР°Р№ API-СЌРЅРґРїРѕРёРЅС‚ РґР»СЏ РІС‹С‡РёСЃР»РµРЅРёСЏ СЃРєРѕР»СЊР·СЏС‰РµРіРѕ СЃСЂРµРґРЅРµРіРѕ С‡РёСЃРµР», РЅР°С…РѕРґСЏС‰РёС…СЃСЏ РІ Р±Р°Р·Рµ РґР°РЅРЅС‹С….
    // // Р’С‹С…РѕРґРЅС‹Рµ РґР°РЅРЅС‹Рµ вЂ“ СЌС‚Рѕ РјР°СЃСЃРёРІ, РєРѕС‚РѕСЂС‹Р№ РЅР° РґРІР° СЌР»РµРјРµРЅС‚Р° РєРѕСЂРѕС‡Рµ, С‡РµРј РёСЃС…РѕРґРЅС‹Рµ С‡РёСЃР»Р° РІ Р±Р°Р·Рµ РґР°РЅРЅС‹С….
    // // РљР°Р¶РґС‹Р№ СЌР»РµРјРµРЅС‚ СЌС‚РѕРіРѕ РјР°СЃСЃРёРІР° вЂ“ СЌС‚Рѕ СЃСЂРµРґРЅРµРµ Р·РЅР°С‡РµРЅРёРµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРіРѕ С‡РёСЃР»Р° РІ Р±Р°Р·Рµ РґР°РЅРЅС‹С… Рё РґРІСѓС… СЃР»РµРґСѓСЋС‰РёС… Р·Р° РЅРёРј СЌР»РµРјРµРЅС‚РѕРІ.


    // //meil on list arve, kus on arvud
    // //iga arvu kohta leiame keskmise
    // //paneme seda massiivi
    // //vordleme massivi mis koige maxArv on 

    // @GetMapping("/libisevKeskmine")
    // public double getLibisevKeskmine() {
    //     List<Arv> arvudeList = arvRepository.findAll(); //list arve
    //     List <Double> arvud = new ArrayList<>();
    //     Double maxArv = 0.00;
    //     for(int i=0; i<arvudeList.size(); i++){
    //         double arvKeskmine = arvudeList.get(i).getAge() + arvudeList.get(i+1).getAge() + arvudeList.get(i+2).getAge();
    //         double arvKeskmineArvutamine = arvKeskmine/3; //leian selle arvu keskmise
    //         arvud.add(arvKeskmineArvutamine); //panen arraysse 
    //     }
    //     //maksimumi leidmine arrayst
    //     for(int i=0; i<arvud.size();i++){
    //         if(arvud.get(i) < arvud.get(i + 1)){ //vaatame Гјle massiivi ja vГµrdleme
    //             maxArv = arvud.get(i); //leiame maksimumi
    //         }
    //     }
    //     return maxArv;
    // }
}