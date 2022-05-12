# Sportschema Larissa Klaassen

Topsporter Larissa Klaassen is slechtziend. Ze is bijna blind, maar ziet nog kleuren met hoog contrast en daardoor lichtelijk vormen. Larissa's coach stuurde haar eerst altijd een sportschema op (inmiddels niet meer omdat ze er toch niet naar luisterd). Het nadeel van zo'n sportschema is dat het voor Larissa totaal niet prettig "te lezen" is. Daarom moet zij een nieuw sportschema krijgen die met een screenreader goed te lezen is. Een website is daarom voor haar misschien de beste optie.

## Testen

### Test 1
Voor test 1 hebben we nog niet heel veel kunnen maken omdat we vrij weinig informatie hadden. Ik had een opzetje gemaakt van een maand schema:

![voorbeeld van de webpagina waarin een maandoverzicht te zien is van mei](img/maandoverzicht.png)

#### Ingevingen
- Larissa is niet helemaal blind. Ze ziet nog wel contrasten en daardoor vormen. Ze heeft een voorkeur voor een donkere achtergrond met  daarover felle kleuren. Ze houdt van de kleur oranje. Deze informatie kan handig zijn voor het kleurenschema van de website.
- Aangezien Larissa het scherm nog wel kan zien, is het voor haar ook prettig om wat te zien gebeuren als ze naar een website kijkt. Het geeft haar een extra houvast. Dit maakt het voor haar wel belangrijke feedback.
- Ze is erg zelfstandig. Ze woont dan ook alleen met een hulphond. Ook haar laptop kan ze helemaal zelfstandig besturen en gebruiken.
- Ze heeft een normale laptop met screenreader software: JAWS / NVDA
- Haar screenreader heeft de spreker 'Claire - NL dames'. Deze is voor haar erg toegankelijk.
- Ze heeft een braille leesregel voor haar laptop, maar ze gebruikt hem eigenlijk nooit.
- Ze is erg visueel ingesteld.
- Een lettertype zo simpel mogelijk is voor haar prettig zodat ze nog wel iets van het lettertype kan zien.
- Gebruikt Training Peaks (coach maakt geen schema’s voor haar)
- Larissa heeft vaste trainingen in de week, de rest is afstemmen per periode. Ook deels op gevoel trainen. Haar sportschema ziet er wekelijks deels hetzelfde eruit.
- Larissa is totaal niet geordend. Thuis laat ze alles overal slingeren. 'Als het niet op mijn rommelhoop ligt, ben ik het kwijt'.
- Ze vindt het prettig om in een schema te zien hoeveel ze per dag moet doen en hoelang.
- Ze wil de informatie op een website zo snel mogelijk krijgen. Ze neem niet de tijd om heel lang op een element te zitten.
- Normaal heeft ze een sportschema per wedstrijdseizoen. Dus tot het volgende kampioenschap.
- Ze kan onderdelen zien, dus veel ruimte tussen html elementen is voor haar prettig. Dan kan ze nog een soort structuur in de website zien.
- Ze gebruikt altijd tab om door een website te gaan. Ze gebruikt eigenlijk nooit de pijltjes. Daarnaast vindt ze het ook prettig om dingen in een website op te zoeken in een inputveld. Zo hoeft ze niet de hele website af om iets te vinden.


#### Testen
- Voor het maandoverzicht heb ik de dagen in een `<ul>` gewrapt waarin elke dag een `<li>` is. De screenreader las het voor als: 'lijst, 31 elementen'. Dat kwam voor haar nogal overwelmend over. Het gebruik van een lijst is daarom niet de beste optie.
- De screenreader leest van links naar rechts, dus het las eerst 'Maandag, Dinsdag, Woensdag, Donderdag, Vrijdag, Zaterdag, Zondag' voordat deze naar de dagen zelf ging. Na veel elementen kwam ze uiteindelijk aan bij de dagen zelf. Ze vertelde dat het voor haar te lang duurt en ze liever zo snel mogelijk bij de dagen terecht komt.
- De tekst was te klein. Zoals eerder vernoemd mag alles lekker ruim en groot aangegeven worden.
- De kleuren zijn nu zwart op wit, andersom is prettiger.

#### Conclusie
Een maandoverzicht is niet helemaal geschikt voor haar. Het zijn veel elementen die dicht op elkaar zitten en er komt al snel meer informatie naar boven dan ze nodig heeft. Mijn focus wordt om te kijken naar een weekschema en deze zo prettig en ruim mogelijk te weergeven.
