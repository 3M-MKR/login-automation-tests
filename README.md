# login-automation-tests
# Gmail Login Test Automation

## Opis projektu
Ten projekt to implementacja testów automatycznych w Playwright, przygotowana zgodnie z wytycznymi rekrutacyjnymi. Zastosowano w nim wzorzec **Page Object Pattern**, co pozwala na łatwiejszą konserwację i rozszerzalność testów. Testy zostały zaimplementowane dla strony Gmail, w języku angielskim (domyślny język strony) oraz obejmują standardową procedurę logowania (bez uwierzytelniania dwuskładnikowego). 

### Przypadki testowe
1. **Poprawne logowanie**
   - Scenariusz testowy sprawdza poprawne logowanie przy użyciu prawidłowego adresu e-mail i hasła.
2. **Błędny login**
   - Test weryfikuje zachowanie aplikacji w przypadku podania nieistniejącego adresu e-mail.
3. **Błędne hasło**
   - Sprawdzenie zachowania aplikacji, gdy podane zostanie poprawne konto, ale błędne hasło.
4. **Wylogowanie**
   - Test sprawdza poprawne wylogowanie użytkownika po zalogowaniu.

> **Dodatkowa uwaga:** Na potrzeby testów stworzyłam tymczasowy adres e-mail, aby przeprowadzić logowanie zgodne z wymogami zadania.

---

## Wymagania
Do uruchomienia projektu potrzebujesz:

- **Node.js** (zalecana wersja: 18.x lub wyższa)
- **Playwright**
- **Visual Studio Code (VSC)** lub innego edytora kodu

## Instrukcja instalacji

1. **Klonowanie repozytorium:**
2. **Instalacja zależności:**
3. **Instalacja Playwright:**

---

## Struktura projektu

Projekt został zorganizowany w sposób modularny z zastosowaniem wzorca **Page Object Pattern**:

MY-PROJECT/
|-- node_modules/               # Zależności projektu (automatycznie generowane)
|-- test-results/               # Wyniki testów (Playwright)
|-- tests/
|   |-- fixtures/               # Dane testowe
|   |   |-- loginData.json      # Dane logowania
|   |   |-- logoutData.json     # Dane wylogowania
|   |   |-- userData.json       # Dane użytkowników
|   |-- pages/                  # Strony w Page Object Pattern
|   |   |-- loginPage.ts        # Klasa dla strony logowania
|   |   |-- logoutPage.ts       # Klasa dla strony wylogowania
|   |-- test/                   # Testy automatyczne
|       |-- login.spec.ts       # Testy logowania
|       |-- logout.spec         # Testy wylogowania
|-- package-lock.json           # Zablokowane wersje zależności
|-- package.json                # Konfiguracja projektu Node.js
|-- playwright.config.ts        # Konfiguracja Playwright
|-- tsconfig.json               # Konfiguracja TypeScript
```

Opis dodatkowych komponentów

- **fixtures/**: Przechowuje dane testowe w formacie JSON, co umożliwia elastyczność i oddzielenie logiki testów od danych.
- **pages/**: Implementacja Page Object Pattern - klasy odpowiadające za interakcję ze stronami. Każda klasa zawiera selektory oraz metody do wykonywania akcji.
- **test/**: Właściwe testy Playwright zapisane w formacie .spec.ts. Każdy plik odpowiada za konkretne funkcje (np. logowanie, wylogowanie).

---

## Uruchomienie testów

Aby uruchomić testy, wykonaj następujące kroki:

1. **Weryfikacja instalacji:**
   Upewnij się, że wszystkie zależności zostały poprawnie zainstalowane.

2. **Uruchomienie testów:**
   Uruchom poniższe polecenie w terminalu:
   ```bash
   npx playwright test
   ```

3. **Raport wyników:**
   Po zakończeniu testów możesz wygenerować raport, używając polecenia:
   ```bash
   npx playwright show-report
   ```

---

## Wykorzystane technologie i dobre praktyki

- **Playwright**: Narzędzie do testów end-to-end z zaawansowaną obsługą przeglądarek.
- **Page Object Pattern**: Oddzielenie logiki interakcji z aplikacją od testów, co ułatwia utrzymanie kodu.
- **Dane testowe w JSON**: Przechowywanie zmiennych w jednym miejscu, co umożliwia łatwą zmianę wartości.
- **Asynchroniczność**: Każdy test używa `async/await`, co poprawia czytelność i stabilność kodu.

---

## Uwagi końcowe

Przygotowanie tego projektu wymagało skonfigurowania środowiska programistycznego od podstaw, w tym:
- Instalacji Playwright oraz frameworków wspierających testy.
- Skonfigurowania Visual Studio Code na prywatnym komputerze.

Czasochłonność tego procesu wynikała z konieczności instalacji i konfiguracji narzędzi. Mimo to, rozwiązanie zostało przygotowane zgodnie z najlepszymi praktykami i uwzględnia wszystkie wytyczne zadania rekrutacyjnego.

W przypadku jakichkolwiek pytań lub uwag dotyczących projektu, proszę o kontakt.
