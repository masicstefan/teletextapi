## MATCO Teletext

Spletna stran imenovana **MATCO Teletekst** predstavlja simulacijo znane rešitve avtorja John Adamsa (1970). Storitev je prisotna v vseh velikih agencijah in televizijskih hišah (prva je CEEFAX, 1974) in predstavlja pravzaprav prvi interaktivni televizijski servis.

**Ideja** seminarske naloge je oblikovati popolno kopijo funkcionalnosti *starejše sestre*, tako v obliki kot uporabi.

Iz uporabniške perspektive je ideja naloge oblikovati aplikacijo, ki uporabniku ne bo nudila ničesar več kakor jo v osnovi nudi Teletekst sistem na analognih televizijah (npr. RTV Slo Teletext). Pri tem se bo iskanje in prikaz informacij omejilo zgolj na iskanje s pomočjo številk strani in s pomočjo štirih barvnih gumbov.

Podrejeno se funkcionalnost razširi z dodajanjem možnosti nastavitve delovnega okolja: vklop iskalnika (Search), izbira različnih »retro« prikazov ter morebitna povezava z izbrano agencijsko hišo (npr. STA) in vpeljavo sporočilnega sistema (npr. RabbitMQ).

<hr>

**Razširitev** aplikacije se nakazuje v oblikovanju primernega algoritma zamenjav novic kot je to primer v realnih izvedbah teletekst strani. Koncept novice sledi principu menjavanja glavnih novic v izbranem časovnem okviru (npr. vsake pol ure). Nova novica prevzame številko predhodne, obstoječa novica se pomakne v seznamu, zadnja novica se označi kot nevidna.

**Oblikovni** princip sicer ni ključnega značaja za aplikacijo. Ne glede na to se bo aplikacija ukvarjala tudi z "retro" konceptom predstavitve (izbira primerne teletext pisave, uporaba zgolj majhne množice barv).

<hr>

## Razvojno okolje
Aplikacijo zaženemo z ukazom `node index.js` ali ukazom ``nodemon index.js``


>**MATCO logotip** predpona je dodano kot posvetilo priznanemu slovenskemu nožarju Mateju, umetniku med obrtniki njegovega stanu ter dolgoletnemu sponzorju avtorja.


