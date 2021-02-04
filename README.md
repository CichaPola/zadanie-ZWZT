# zadanie

Cześć!  
Do stworzenia jest prosta aplikacja w oparciu o mini-framework `PureJS`. Aplikacja powinna składać się z dwóch widoków:
1. Home - prosty formularz z polami `username` i `password`, przycisk `submit`.
2. Success - strona powitalna z informacją o udanej akcji.

Po przesłaniu formularza aplikacja powinna przekierować do strony success lub wyświetlić informację o błędzie.

##### Część zaawansowana
Zmodyfikuj projekt w taki sposób, aby każda templatka była w osobnym pliku. To zadanie wymaga trochę kreatywności, być może trzeba będzie rozbudować konfigurację webpack'a, być może zmodyfikować logikę `engine.js` lub `router.js`. Wszystkie chwyty dozwolone. Cel jest taki, aby templatki były tworzone poza `index.html`.

##### Rozwiązanie
Na rozwiązanie składa się:
- link do repozytorium
- screenshot widoku home

Oceniamy:
- działające rozwiązanie
- czysty i dobrze napisany kod
- minimalistyczny i estetyczny design

## Dokumentacja PureJS

Framework składa się z dwóch części
1. `engine.js` - silnik templatek
2. `router.js` - router i logika kontrolerów

##### Dodawanie widoków

Aby stworzyć widok należy:
1. Dodać templatkę w `index.html` z odpowiednim `id`
2. Zarejestrować widok przy pomocy metody `route`

```javascript
route('/path/to/view', 'idSelector', function() {
  // controller logic
})
```

##### Logika kontrolerów

1. `template` - interpolacja (*example 1*) - zmienne w kontrolerach są interpolowane na templatki (`<%= nazwa zmiennej %>`). Dodatkowo templatki wykonują czysty JavaScript taki jak np. pętle (`<% console.log('js is in the air!') %>`.

2. `$on` - rejestracja eventów (*example 2*) - aby podpiąć obsługę eventu należy skorzystać z metody `$on`, zgodnie z sygnaturą: `this.$on('.css-selector', 'eventType', (ev) => { /* event handler */ });`

3. `$refresh` - wymuszony rerender (*example 2*) - metoda umożliwiająca odświeżenie całego widoku np. na wypadek zmiany wartości pól.

## Dokumentacja API
*Example request*
```
POST https://zwzt-zadanie.netlify.app/api/login

{
  username: 'zwzt',
  password: 'secret'
}
```
*Example response*
```
{
  message: 'Login success!',
  token: 'eyJhbGciOiJIUz...'
}
```

Aby otrzymać komunikat o błędzie, trzeba w polu `password` wpisać `error`

*Example request*
```
POST https://zwzt-zadanie.netlify.app/api/login
{
  username: 'zwzt',
  password: 'error'
}
```
*Example response*
```
{
  message: 'Wrong password!',
  error: true
}
```
