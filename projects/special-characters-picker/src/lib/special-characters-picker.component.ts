import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'special-characters-picker',
  templateUrl: './special-characters-picker.component.html',
  styleUrls: ['./special-characters-picker.component.css']
})
export class SpecialCharactersPickerComponent implements OnInit, OnChanges, AfterViewInit {
  arrOfCat = ["v-pills-currencies", "v-pills-text", "v-pills-quotations", "v-pills-math", "v-pills-latin", "v-pills-symbols", "v-pills-arrows"]
  @ViewChild('myModal') myModal!: ElementRef;
  @Output() closeModel = new EventEmitter<any>();
  @Output() selectSpecialChar = new EventEmitter<string>();
  modalInstance: any;
  @Input() showModel: boolean = false;
  ngOnInit(): void {
    this.getAllChars()
  }

  ngAfterViewInit(): void {
    this.modalInstance = new bootstrap.Modal(this.myModal.nativeElement);
  }
  searchText = ''
  search() {
    debugger;
    if (!document.getElementById('v-pills-all-tab')?.classList.contains('active')){
      for(let cat of this.arrOfCat){
        if (document.getElementById(cat)?.classList.contains('active')){
          console.log('cat',cat);
          
        document.getElementById(cat)?.classList.remove('active');
        document.getElementById(cat)?.classList.remove('show');
        document.getElementById(cat+'-tab')?.classList.remove('show');
        break;
        }
      }
     var element= document.getElementById('v-pills-all-tab');
     element?.click();

      // document.getElementById('v-pills-all-tab')?.classList.add('active');
    }
    this.searchText = this.searchText.trim();
    if (this.searchText == '') {
      delete this.chars.filtered;
      return
    }
    this.chars.filtered = this.chars.all.filter((item: string) => item == this.searchText)
  }



  chars: any = {
    currencies: [
      "$",     // Dollar (used by multiple countries including USD, CAD, AUD, etc.)
      "€",     // Euro
      "£",     // Pound Sterling
      "¥",     // Japanese Yen / Chinese Yuan
      "₩",     // South Korean Won
      "₹",     // Indian Rupee
      "₽",     // Russian Ruble
      "Fr",    // Swiss Franc (The actual symbol used can vary)
      "R$",    // Brazilian Real
      "₺",     // Turkish Lira
      "฿",     // Thai Baht
      "₪",     // Israeli New Shekel
      "kr",    // Nordic currencies like Norwegian Krone, Swedish Krona
      "zł",    // Polish Złoty
      "₿",     // Bitcoin
      "c",     // Euro-Cent
      "₫",     // Vietnamese Dong
      "₴",     // Ukrainian Hryvnia
      "₱",     // Philippine Peso
      "₨",     // Pakistani Rupee (and other rupee)
      "₸",     // Kazakhstani Tenge
      "₡",     // Costa Rican Colón
      "₵",     // Ghanaian Cedi
      "₲",     // Paraguayan Guarani
      "₥",     // Old Spanish Peseta
      "₦",     // Nigerian Naira
      "₭",     // Lao Kip
      "₮",     // Mongolian Tugrik
      "₼",     // Azerbaijani Manat
      "₢",     // Brazilian Cruzeiro
      "ƒ",     // Dutch Florin, Aruban Florin, etc.
      "MOP$",  // Macanese Pataca
      "MT",    // Mozambican Metical
      "UM",    // Old Moroccan Franc
      "T$",    // Tongan Pa'anga
      "WS$",   // Samoan Tala
      "₠",     // European Currency Unit (not in use)
      "₧",     // Spanish Peseta (not in use)
      "₤",     // Italian Lira (not in use)
      "元", // Renminbi/Yuan
      "圆", // Informal term for Yuan
      "﷼", // Iranian Rial (also used for some other Arabic currencies)
    ],
    text: ["©", // Copyright
      "®", // Registered trademark
      "™", // Trademark
      "°", // Degree (as in 45°)
      "µ", // Micro
      "¶", // Paragraph (pilcrow)
      "·", // Middle dot
      "–", // En dash
      "—", // Em dash
      "‡", // Double dagger
      "†", // Dagger
      "…", // Ellipsis
      "«", // Left-pointing double angle quotation mark
      "»", // Right-pointing double angle quotation mark
      "¤", // Generic currency
      "¡", // Inverted exclamation mark
      "¿", // Inverted question mark
      "¦", // Broken vertical bar
      "¨", // Diaeresis
      "¬", // Not sign
      "¯", // Macron
      "¸", // Cedilla
      "±", // Plus-minus
      "‰", // Per mille sign
      "¼", // One quarter
      "½", // One half
      "¾", // Three quarters
      "×", // Multiplication
      "÷", // Division
      "∞", // Infinity
      "≈", // Almost equal to
      "≠", // Not equal to
      "≤", // Less than or equal to
      "≥", // Greater than or equal to
    ],
    quotations: ["“", // Left double quotation mark (used in English and some other languages)
      "”", // Right double quotation mark
      "‘", // Left single quotation mark
      "’", // Right single quotation mark
      "«", // Left-pointing double angle quotation mark (used in French, Russian, and some other languages)
      "»", // Right-pointing double angle quotation mark
      "„", // Low double comma quotation mark (used in some Central European languages)
      "‚", // Low single comma quotation mark
      "‹", // Single left-pointing angle quotation mark (used in some European languages)
      "›", // Single right-pointing angle quotation mark
      "「", // Left corner bracket (used in East Asian languages)
      "」", // Right corner bracket
      "『", // Left white corner bracket (used in East Asian languages)
      "』", // Right white corner bracket
      "｢", // Halfwidth left corner bracket (used in East Asian languages)
      "｣", // Halfwidth right corner bracket
      "〝", // Reversed double prime quotation mark
      "〞", // Double prime quotation mark
      "〟", // Low double prime quotation mark
    ],
    mathmatical: [
      "+",    // Addition
      "-",    // Subtraction
      "*",    // Multiplication (often used in programming or quick arithmetic)
      "×",    // Multiplication (traditional symbol)
      "/",    // Division (often used in programming or quick arithmetic)
      "÷",    // Division (traditional symbol)
      "=",    // Equals
      "≠",    // Not equal to
      "≈",    // Approximately equal to
      "≡",    // Identically equal to
      ">",    // Greater than
      "<",    // Less than
      "≥",    // Greater than or equal to
      "≤",    // Less than or equal to
      "∞",    // Infinity
      "√",    // Square root
      "∛",    // Cube root
      "∜",    // Fourth root
      "∑",    // Summation
      "∫",    // Integral
      "∂",    // Partial differential
      "Δ",    // Delta, represents change
      "π",    // Pi
      "e",    // Base of natural logarithm
      "φ",    // Golden ratio
      "λ",    // Lambda, often represents wavelength
      "θ",    // Theta, often represents an angle
      "∠",    // Angle
      "°",    // Degrees
      "′",    // Minutes (angle)
      "″",    // Seconds (angle)
      "∏",    // Product symbol
      "¬",    // Logical NOT
      "∧",    // Logical AND
      "∨",    // Logical OR
      "⊕",    // XOR (exclusive or)
      "↔",    // Bidirectional implication
      "→",    // Implies
      "∩",    // Intersection
      "∪",    // Union
      "∈",    // Element of
      "∉",    // Not an element of
      "⊆",    // Subset of
      "⊇",    // Superset of
      "¬",    // Not
      "∀",    // For all
      "∃",    // There exists
      "!",    // Factorial
    ],
    extendedLatin: ["Á", "á", "Ă", "ă", "Ắ", "ắ", "Ằ", "ằ", "Ẳ", "ẳ", "Ẵ", "ẵ", "Ặ", "ặ", "Ą", "ą",
      "À", "à", "Ã", "ã", "Ā", "ā", "Ą", "ą", "Ä", "ä", "Å", "å", "Ǻ", "ǻ", "Ǎ", "ǎ",
      "Â", "â", "Ǟ", "ǟ", "Ǡ", "ǡ", "Ǻ", "ǻ", "Ǎ", "ǎ", "Æ", "æ", "Ǽ", "ǽ", "Ǣ", "ǣ",
      "ẞ", "ß", "Ç", "ç", "Ć", "ć", "Č", "č", "Ĉ", "ĉ", "Ċ", "ċ", "Ð", "ð", "Ď", "ď",
      "Đ", "đ", "É", "é", "Ě", "ě", "Ȩ", "ȩ", "Ẹ", "ẹ", "Ê", "ê", "Ë", "ë", "Ė", "ė",
      "Ę", "ę", "Ɛ", "ɛ", "Ĝ", "ĝ", "Ğ", "ğ", "Ġ", "ġ", "Ģ", "ģ", "Ĥ", "ĥ", "Ħ", "ħ",
      "Í", "í", "Î", "î", "Ï", "ï", "Į", "į", "İ", "ı", "Ī", "ī", "Ĩ", "ĩ", "Ĵ", "ĵ",
      "Ķ", "ķ", "ĸ", "Ł", "ł", "Ĺ", "ĺ", "Ľ", "ľ", "Ļ", "ļ", "Ń", "ń", "Ň", "ň", "Ñ", "ñ",
      "Ŋ", "ŋ", "Ó", "ó", "Ô", "ô", "Ö", "ö", "Ő", "ő", "Ò", "ò", "Ō", "ō", "Ø", "ø",
      "Ǿ", "ǿ", "Ŕ", "ŕ", "Ř", "ř", "Ŗ", "ŗ", "Ș", "ș", "Ś", "ś", "Ŝ", "ŝ", "Š", "š",
      "Ť", "ť", "Ţ", "ţ", "Þ", "þ", "Ŧ", "ŧ", "Ț", "ț", "Ú", "ú", "Ű", "ű", "Û", "û",
      "Ū", "ū", "Ù", "ù", "Ų", "ų", "Ŭ", "ŭ", "Ü", "ü", "Ů", "ů", "Ũ", "ũ", "Ŵ", "ŵ",
      "Ý", "ý", "Ÿ", "ÿ", "Ŷ", "ŷ", "Ź", "ź", "Ž", "ž", "Ż", "ż"],
    symbols: [
      "©", // Copyright
      "®", // Registered trademark
      "™", // Trademark
      "¶", // Pilcrow - used to denote paragraphs
      "§", // Section sign
      "†", // Dagger
      "‡", // Double dagger
      "•", // Bullet point
      "‣", // Triangle bullet point
      "⁃", // Hyphen bullet
      "¤", // Generic currency symbol
      "¦", // Broken vertical bar
      "¢", // Cent
      "£", // Pound Sterling
      "¥", // Yen
      "€", // Euro
      "₹", // Indian Rupee
      "№", // Numero sign
      "°", // Degree symbol
      "⁂", // Asterism
      "‰", // Per mille sign
      "‱", // Basis point
      "º", // Masculine ordinal indicator
      "ª", // Feminine ordinal indicator
      "∅", // Empty set
      "¤", // Currency
      "♠", // Spade suit
      "♣", // Club suit
      "♥", // Heart suit
      "♦", // Diamond suit
      "♭", // Music flat
      "♮", // Music natural
      "♯", // Music sharp
      "✓", // Check mark
      "✗", // Ballot X
      "❌", // Cross mark
      "⭕", // Hollow circle
      "〒", // Japanese postal mark
      "☎", // Telephone
      "☑", // Check box
      "☆", // White star
      "★", // Black star
      "☼", // Sun
      "☾", // Waxing crescent moon
      "☽", // Waning crescent moon
      "☺", // White smiling face
      "☹", // White frowning face
      "♨", // Hot springs
      "♻", // Recycling
    ],
    arrows: [
      "←", // Leftwards arrow
      "↑", // Upwards arrow
      "→", // Rightwards arrow
      "↓", // Downwards arrow
      "↔", // Left right arrow
      "↕", // Up down arrow
      "↖", // North west arrow
      "↗", // North east arrow
      "↘", // South east arrow
      "↙", // South west arrow
      "↩", // Leftwards arrow with hook (return)
      "↪", // Rightwards arrow with hook
      "↫", // Leftwards arrow with loop
      "↬", // Rightwards arrow with loop
      "↻", // Clockwise rightwards and leftwards open circle arrows
      "↺", // Anticlockwise open circle arrow
      "⇐", // Leftwards double arrow
      "⇑", // Upwards double arrow
      "⇒", // Rightwards double arrow
      "⇓", // Downwards double arrow
      "⇔", // Left right double arrow
      "⇕", // Up down double arrow
      "⇦", // Leftwards white arrow
      "⇧", // Upwards white arrow
      "⇨", // Rightwards white arrow
      "⇩", // Downwards white arrow
      "⇳", // Up down white arrow
      "⇄", // Leftwards arrow with tip rightwards
      "⇅", // Upwards arrow with tip downwards
      "⇆", // Rightwards arrow with tip leftwards
      "⇇", // Leftwards paired arrows
      "⇈", // Upwards paired arrows
      "⇉", // Rightwards paired arrows
      "⇊", // Downwards paired arrows
      "⇋", // Leftwards harpoon over rightwards harpoon
      "⇌", // Rightwards harpoon over leftwards harpoon
      "⇜", // Leftwards squiggle arrow
      "⇝", // Rightwards squiggle arrow
      "⇞", // Upwards arrow with double stroke
      "⇟", // Downwards arrow with double stroke
      "⇠", // Leftwards dashed arrow
      "⇡", // Upwards dashed arrow
      "⇢", // Rightwards dashed arrow
      "⇣", // Downwards dashed arrow
      "⇤", // Leftwards arrow to bar
      "⇥", // Rightwards arrow to bar
    ],
    all: []
  };
  getAllChars() {
    for (let key of Object.keys(this.chars)) {
      if (key != 'all')

        for (let char of this.chars[key]) {
          this.chars.all.push(char);
        }
    }
  }


  open() {
    this.searchText = '';
    this.modalInstance.show();
  }
  close() {
    this.searchText = '';
    delete this.chars.filtered;
    this.modalInstance.hide();
    this.closeModel.emit(false);


  }
  ngOnChanges() {
    if (this.showModel && !this.isModalShown()) {
      this.open();
    }
  }
  select(char: string) {
    this.selectSpecialChar.emit(char);
    this.close()
  }

  isModalShown(): boolean {
    if (this.myModal.nativeElement && this.myModal.nativeElement?.classList)
      return this.myModal.nativeElement?.classList?.contains('show');
    else return false;
  }
  checkStatus(event:any) {
    // bootstrap closes modal when we click outside the real modal (black area)  but the parent didnt know so i need to inform him by calling close()
    if (event.target.id == "myModal") {
      this.close();
  }

  }
}
