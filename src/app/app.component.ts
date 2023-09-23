import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  faDoorClosed,
  faDoorOpen,
  faSignOutAlt,
  faPlusCircle,
  faItalic,
  faUnderline,
  faFont,
  faBold,
  faBucket,
  faPen,
  faFillDrip,
  faTextSlash,
  faAnchor,
} from '@fortawesome/free-solid-svg-icons'; //import icon
import * as bootstrap from 'bootstrap';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tabulator } from 'tabulator-tables';
import { Lightbox } from "lightbox-sondos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  show = false;
  showCorners = false;
  @ViewChild('resizer') resizer!: ElementRef;
  ImageLink = [{ src: 'https://media.istockphoto.com/id/530685719/photo/group-of-business-people-standing-in-hall-smiling-and-talking-together.jpg?s=2048x2048&w=is&k=20&c=42LERFMrC4TFG8r_MRhMWNSS7qJqcMuroLMOR_U2RiU=', caption: "video", thumb: "https://media.istockphoto.com/id/530685719/photo/group-of-business-people-standing-in-hall-smiling-and-talking-together.jpg?s=2048x2048&w=is&k=20&c=42LERFMrC4TFG8r_MRhMWNSS7qJqcMuroLMOR_U2RiU=" }]
  // existing startResize method
  startResize(event: MouseEvent, type: string) {
    debugger;
    const resizerLine = this.resizer.nativeElement;
    const target = event.target as HTMLElement;
    const cell = target.closest('td') || target.closest('th');

    // ... (rest of your existing code)

    const doResize = (moveEvent: MouseEvent) => {
      resizerLine.style.display = 'block';
      if (type === 'col') {
        resizerLine.style.height = '100%';
        resizerLine.style.top = '0';
        resizerLine.style.left = moveEvent.pageX + 'px';
      } else {
        resizerLine.style.width = '100%';
        resizerLine.style.left = '0';
        resizerLine.style.top = moveEvent.pageY + 'px';
      }
    };

    const stopResize = () => {
      document.documentElement.removeEventListener('mousemove', doResize);
      document.documentElement.removeEventListener('mouseup', stopResize);
      resizerLine.style.display = 'none';
    };

    document.documentElement.addEventListener('mousemove', doResize);
    document.documentElement.addEventListener('mouseup', stopResize);
  }
  open(index: number,contentType:any): void {


    if (contentType == 'video') {
      this.lightbox.open(this.ImageLink, index,{isVideo:true});

    }
    else{
      this.lightbox.open(this.ImageLink, index,{isVideo:false});

    }
  }

  close(): void {
    this.lightbox.close();
  }

  onMouseDown(event: MouseEvent) {
    debugger;
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    // Define a sensitivity area (in pixels) around the borders
    const sensitivity = 5;

    if (Math.abs(offsetX - rect.width) < sensitivity) {
      this.startResize(event, 'col');
    } else if (Math.abs(offsetY - rect.height) < sensitivity) {
      this.startResize(event, 'row');
    }
  }


  ngOnInit(): void {

  }
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  cI = null;
  cJ = null;
  selJ = null;
  selI = null;
  openModel() {
    this.show = true;
  }
  selectChar(char: string) {
    console.log('char', char);
  }

  getTimes(num: any) {
    return new Array(num);
  }
  change(e: any) {
    console.log('e', e);

    this.show = e
  }
  @ViewChild('templateRef', { read: ElementRef }) templateRef!: ElementRef;

  @ViewChild('textEditor', { read: ElementRef }) textEditor!: ElementRef;

  fontSize = 12;
  ctrlPickers = { bgColor: false, txtColor: false };

  ngAfterViewInit() {
    debugger;



    const tooltipTriggerList = [].slice.call(
      this.templateRef?.nativeElement.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      )
    );
    const dropdownTooltipTriggerList = [].slice.call(
      this.templateRef?.nativeElement.querySelectorAll(
        '[data-bs-toggle="dropdown"]'
      )
    );
    const tooltipList = tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    const tooltipList2 = dropdownTooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }

  faDoorClosed = faDoorClosed;
  faBucket = faBucket;
  faFillDrip = faFillDrip;
  faPen = faPen;
  bgColor = '#000000';
  txtColor = '#000000';
  selection = window.getSelection();
  fonts = ['Serif', 'Sans-serif', 'Monospace', 'Cursive', 'Fantasy'];
  // Store the selected text range
  range: any;

  openColorPicker(id: string) {
    var ok: any = document.getElementById(id);
    ok?.click();
    ok.style.visibility = 'visibile';
  }
  faUnderline = faUnderline;
  faBold = faBold;
  faFont = faFont;
  classIsAvailableError = false;
  faItalic = faItalic;
  showFontPopover = true;
  text: any;
  newText: any;
  start: any;
  end: any;
  newDom = '';
  firstTimeToClick = true;
  fontWeights = ['normal', 500, 600, 700, 800, 900, 1000];
  fontStyles = ['oblique', 'italic', 'normal'];
  textDecorations = [
    { name: 'Underline Solid', style: 'underline solid' },
    { name: 'Underline Dashed', style: 'underline dashed' },
    { name: 'Underline Dotted', style: 'underline dotted' },
    { name: 'Line Through Solid', style: 'line-through solid' },

    { name: 'Line Through Dashed', style: 'line-through dashed' },
    { name: 'Line Through Dotted', style: 'line-through dotted' },
    { name: 'Overline Solid', style: 'overline solid' },

    { name: 'Overline Dashed', style: 'overline dashed' },
    { name: 'Overline Dotted', style: 'overline dotted' },
    { name: 'None', style: 'none' },

    // { name: 'Double Dashed', className: 'double-dashed' },
    // { name: 'Double Dotted', className: 'double-dotted' },
    // { name: 'Double Solid', className: 'double-solid' },
  ];
  textTransformations = [
    // { name: 'capitalize', className: 'capitalize' },
    { name: 'lowercase', className: 'lowercase' },
    { name: 'uppercase', className: 'uppercase' },
    { name: 'none', className: 'none-text-transformation' },
  ];
  textAligning = [
    // { name: 'capitalize', className: 'capitalize' },
    { name: 'align center', style: 'center' },
    { name: 'align right', style: 'right' },
    { name: 'align left', style: 'left' },
    { name: 'align justify', style: 'justify' },
    { name: 'align start', style: 'start' },
    { name: 'align end', style: 'end' },
    { name: 'none', style: 'initial' },


  ];
  toggled = false;
  message = '';

  addEmoji(event: any) {
    var text;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var span: any = document.createElement('SPAN');
    span.innerText = event.char;
    range.insertNode(span);
    range = selection!.getRangeAt(0);

    this.message += event.char;
    this.toggled = false;
    selection?.removeAllRanges();

  }
  addedClasses: any = [];
  colors = [
    { text: 't-black', bg: 'bg-black', shadow: 'shadow-black' },
    {
      text: 't-dark_grey_4',
      bg: 'bg-dark_grey_4',
      shadow: 'shadow-dark_grey_4',
    },
    {
      text: 't-dark_grey_3',
      bg: 'bg-dark_grey_3',
      shadow: 'shadow-dark_grey_3',
    },
    {
      text: 't-dark_grey_2',
      bg: 'bg-dark_grey_2',
      shadow: 'shadow-dark_grey_2',
    },
    {
      text: 't-dark_grey_1',
      bg: 'bg-dark_grey_1',
      shadow: 'shadow-dark_grey_1',
    },
    { text: 't-grey', bg: 'bg-grey', shadow: 'shadow-grey' },
    {
      text: 't-light_grey_1',
      bg: 'bg-light_grey_1',
      shadow: 'shadow-light_grey_1',
    },
    {
      text: 't-light_grey_2',
      bg: 'bg-light_grey_2',
      shadow: 'shadow-light_grey_2',
    },
    {
      text: 't-light_grey_3',
      bg: 'bg-light_grey_3',
      shadow: 'shadow-light_grey_3',
    },
    { text: 't-white', bg: 'bg-white', shadow: 'shadow-white' },
    { text: 't-red_berry', bg: 'bg-red_berry', shadow: 'shadow-red_berry' },
    { text: 't-red', bg: 'bg-red', shadow: 'shadow-red' },
    { text: 't-orange', bg: 'bg-orange', shadow: 'shadow-orange' },
    { text: 't-yellow', bg: 'bg-yellow', shadow: 'shadow-yellow' },
    { text: 't-green', bg: 'bg-green', shadow: 'shadow-green' },
    { text: 't-cyan', bg: 'bg-cyan', shadow: 'shadow-cyan' },
    {
      text: 't-cornflower_blue',
      bg: 'bg-cornflower_blue',
      shadow: 'shadow-cornflower_blue',
    },
    { text: 't-blue', bg: 'bg-blue', shadow: 'shadow-blue' },
    { text: 't-purple', bg: 'bg-purple', shadow: 'shadow-purple' },
    { text: 't-magenta', bg: 'bg-magenta', shadow: 'shadow-magenta' },

    {
      text: 't-light_red_berry_3',
      bg: 'bg-light_red_berry_3',
      shadow: 'shadow-light_red_berry_3',
    },
    {
      text: 't-light_red_3',
      bg: 'bg-light_red_3',
      shadow: 'shadow-light_red_3',
    },
    {
      text: 't-light_orange_3',
      bg: 'bg-light_orange_3',
      shadow: 'shadow-light_orange_3',
    },
    {
      text: 't-light_yellow_3',
      bg: 'bg-light_yellow_3',
      shadow: 'shadow-light_yellow_3',
    },
    {
      text: 't-light_green_3',
      bg: 'bg-light_green_3',
      shadow: 'shadow-light_green_3',
    },
    {
      text: 't-light_cyan_3',
      bg: 'bg-light_cyan_3',
      shadow: 'shadow-light_cyan_3',
    },
    {
      text: 't-light_cornflower_blue_3',
      bg: 'bg-light_cornflower_blue_3',
      shadow: 'shadow-light_cornflower_blue_3',
    },
    {
      text: 't-light_blue_3',
      bg: 'bg-light_blue_3',
      shadow: 'shadow-light_blue_3',
    },
    {
      text: 't-light_purple_3',
      bg: 'bg-light_purple_3',
      shadow: 'shadow-light_purple_3',
    },
    {
      text: 't-light_magenta_3',
      bg: 'bg-light_magenta_3',
      shadow: 'shadow-light_magenta_3',
    },
    {
      text: 't-light_red_berry_2',
      bg: 'bg-light_red_berry_2',
      shadow: 'shadow-light_red_berry_2',
    },
    {
      text: 't-light_red_2',
      bg: 'bg-light_red_2',
      shadow: 'shadow-light_red_2',
    },
    {
      text: 't-light_orange_2',
      bg: 'bg-light_orange_2',
      shadow: 'shadow-light_orange_2',
    },
    {
      text: 't-light_yellow_2',
      bg: 'bg-light_yellow_2',
      shadow: 'shadow-light_yellow_2',
    },
    {
      text: 't-light_cyan_2',
      bg: 'bg-light_cyan_2',
      shadow: 'shadow-light_cyan_2',
    },

    {
      text: 't-light_cornflower_blue_2',
      bg: 'bg-light_cornflower_blue_2',
      shadow: 'shadow-light_cornflower_blue_2',
    },
    {
      text: 't-light_blue_2',
      bg: 'bg-light_blue_2',
      shadow: 'shadow-light_blue_2',
    },
    {
      text: 't-light_purple_2',
      bg: 'bg-light_purple_2',
      shadow: 'shadow-light_purple_2',
    },
    {
      text: 't-light_magenta_2',
      bg: 'bg-light_magenta_2',
      shadow: 'shadow-light_magenta_2',
    },
    {
      text: 't-light_red_berry_1',
      bg: 'bg-light_red_berry_1',
      shadow: 'shadow-light_red_berry_1',
    },
    {
      text: 't-light_red_1',
      bg: 'bg-light_red_1',
      shadow: 'shadow-light_red_1',
    },
    {
      text: 't-light_orange_1',
      bg: 'bg-light_orange_1',
      shadow: 'shadow-light_orange_1',
    },
    {
      text: 't-light_yellow_1',
      bg: 'bg-light_yellow_1',
      shadow: 'shadow-light_yellow_1',
    },
    {
      text: 't-light_green_1',
      bg: 'bg-light_green_1',
      shadow: 'shadow-light_green_1',
    },
    {
      text: 't-light_cyan_1',
      bg: 'bg-light_cyan_1',
      shadow: 'shadow-light_cyan_1',
    },
    {
      text: 't-light_cornflower_blue_1',
      bg: 'bg-light_cornflower_blue_1',
      shadow: 'shadow-light_cornflower_blue_1',
    },

    {
      text: 't-light_blue_1',
      bg: 'bg-light_blue_1',
      shadow: 'shadow-light_blue_1',
    },
    {
      text: 't-light_purple_1',
      bg: 'bg-light_purple_1',
      shadow: 'shadow-light_purple_1',
    },
    {
      text: 't-light_magenta_1',
      bg: 'bg-light_magenta_1',
      shadow: 'shadow-light_magenta_1',
    },
    {
      text: 't-dark_red_berry_1',
      bg: 'bg-dark_red_berry_1',
      shadow: 'shadow-dark_red_berry_1',
    },
    { text: 't-dark_red_1', bg: 'bg-dark_red_1', shadow: 'shadow-dark_red_1' },
    {
      text: 't-dark_orange_1',
      bg: 'bg-dark_orange_1',
      shadow: 'shadow-dark_orange_1',
    },
    {
      text: 't-dark_yellow_1',
      bg: 'bg-dark_yellow_1',
      shadow: 'shadow-dark_yellow_1',
    },
    {
      text: 't-dark_green_1',
      bg: 'bg-dark_green_1',
      shadow: 'shadow-dark_green_1',
    },

    {
      text: 't-dark_cyan_1',
      bg: 'bg-dark_cyan_1',
      shadow: 'shadow-dark_cyan_1',
    },
    {
      text: 't-dark_cornflower_blue_1',
      bg: 'bg-dark_cornflower_blue_1',
      shadow: 'shadow-dark_cornflower_blue_1',
    },
    {
      text: 't-dark_blue_1',
      bg: 'bg-dark_blue_1',
      shadow: 'shadow-dark_blue_1',
    },
    {
      text: 't-dark_purple_1',
      bg: 'bg-dark_purple_1',
      shadow: 'shadow-dark_purple_1',
    },
    {
      text: 't-dark_magenta_1',
      bg: 'bg-dark_magenta_1',
      shadow: 'shadow-dark_magenta_1',
    },
    {
      text: 't-dark_red_berry_2',
      bg: 'bg-dark_red_berry_2',
      shadow: 'shadow-dark_red_berry_2',
    },
    { text: 't-dark_red_2', bg: 'bg-dark_red_2', shadow: 'shadow-dark_red_2' },
    {
      text: 't-dark_orange_2',
      bg: 'bg-dark_orange_2',
      shadow: 'shadow-dark_orange_2',
    },
    {
      text: 't-dark_yellow_2',
      bg: 'bg-dark_yellow_2',
      shadow: 'shadow-dark_yellow_2',
    },

    {
      text: 't-dark_green_2',
      bg: 'bg-dark_green_2',
      shadow: 'shadow-dark_green_2',
    },
    {
      text: 't-dark_cyan_2',
      bg: 'bg-dark_cyan_2',
      shadow: 'shadow-dark_cyan_2',
    },
    {
      text: 't-dark_cornflower_blue_2',
      bg: 'bg-dark_cornflower_blue_2',
      shadow: 'shadow-dark_cornflower_blue_2',
    },
    {
      text: 't-dark_blue_2',
      bg: 'bg-dark_blue_2',
      shadow: 'shadow-dark_blue_2',
    },
    {
      text: 't-dark_purple_2',
      bg: 'bg-dark_purple_2',
      shadow: 'shadow-dark_purple_2',
    },

    {
      text: 't-dark_magenta_2',
      bg: 'bg-dark_magenta_2',
      shadow: 'shadow-dark_magenta_2',
    },
    {
      text: 't-dark_red_berry_3',
      bg: 'bg-dark_red_berry_3',
      shadow: 'shadow-dark_red_berry_3',
    },
    { text: 't-dark_red_3', bg: 'bg-dark_red_3', shadow: 'shadow-dark_red_3' },
    {
      text: 't-dark_orange_3',
      bg: 'bg-dark_orange_3',
      shadow: 'shadow-dark_orange_3',
    },
    {
      text: 't-dark_yellow_3',
      bg: 'bg-dark_yellow_3',
      shadow: 'shadow-dark_yellow_3',
    },
    {
      text: 't-dark_green_3',
      bg: 'bg-dark_green_3',
      shadow: 'shadow-dark_green_3',
    },
    {
      text: 't-dark_cyan_3',
      bg: 'bg-dark_cyan_3',
      shadow: 'shadow-dark_cyan_3',
    },
    {
      text: 't-dark_cornflower_blue_3',
      bg: 'bg-dark_cornflower_blue_3',
      shadow: 'shadow-dark_cornflower_blue_3',
    },
    {
      text: 't-dark_blue_3',
      bg: 'bg-dark_blue_3',
      shadow: 'shadow-dark_blue_3',
    },
    {
      text: 't-dark_purple_3',
      bg: 'bg-dark_purple_3',
      shadow: 'shadow-dark_purple_3',
    },
    {
      text: 't-dark_magenta_3',
      bg: 'bg-dark_magenta_3',
      shadow: 'shadow-dark_magenta_3',
    },
  ];



  flexBox = [
    { name: 'padding 5px', className: 'p5' },
    { name: 'margin 5px', className: 'm5' },
    { name: 'padding left 5px', className: 'pl5' },
    { name: 'margin left 5px', className: 'ml5' },
    { name: 'padding right 5px', className: 'pr5' },
    { name: 'margin right 5px', className: 'mr5' },
    { name: 'padding bottom 5px', className: 'pb5' },
    { name: 'margin bottom 5px', className: 'mb5' },
    { name: 'padding top 5px', className: 'pt5' },
    { name: 'margin top 5px', className: 'mt5' },

    { name: 'padding 10px', className: 'p10' },
    { name: 'margin 10px', className: 'm10' },
    { name: 'padding left 10px', className: 'pl10' },
    { name: 'margin left 10px', className: 'ml10' },
    { name: 'padding right 10px', className: 'pr10' },
    { name: 'margin right 10px', className: 'mr10' },
    { name: 'padding bottom 10px', className: 'pb10' },
    { name: 'margin bottom 10px', className: 'mb10' },
    { name: 'padding top 10px', className: 'pt10' },
    { name: 'margin top 10px', className: 'mt10' },

    { name: 'padding 15px', className: 'p15' },
    { name: 'margin 15px', className: 'm15' },
    { name: 'padding left 15px', className: 'pl15' },
    { name: 'margin left 15px', className: 'ml15' },
    { name: 'padding right 15px', className: 'pr15' },
    { name: 'margin right 15px', className: 'mr15' },
    { name: 'padding bottom 15px', className: 'pb15' },
    { name: 'margin bottom 15px', className: 'mb15' },
    { name: 'padding top 15px', className: 'pt15' },
    { name: 'margin top 15px', className: 'mt15' },

    { name: 'padding 20px', className: 'p20' },
    { name: 'margin 20px', className: 'm20' },
    { name: 'padding left 20px', className: 'pl20' },
    { name: 'margin left 20px', className: 'ml20' },
    { name: 'padding right 20px', className: 'pr20' },
    { name: 'margin right 20px', className: 'mr20' },
    { name: 'padding bottom 20px', className: 'pb20' },
    { name: 'margin bottom 20px', className: 'mb20' },
    { name: 'padding top 20px', className: 'pt20' },
    { name: 'margin top 20px', className: 'mt20' },
  ];

  fontSizes = [
    8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  ];
  textLineHeights = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  ];
  constructor(private renderer: Renderer2, private el: ElementRef, private httpClient: HttpClient, private lightbox: Lightbox) { }

  ok() {
    var hea = new HttpHeaders({ 'X-Api-Key': 'Ep9gh4Pfxtkk8ZPlS2RBtg==4tk02nIOt2PJqpCI' })
    this.httpClient.get('https://api.api-ninjas.com/v1/cars?make=honda', { headers: hea }).subscribe((res) => {
      console.log('res', res)
    })
  }
  incrementFontSize() {
    debugger;
    this.fontSize = this.fontSize + 2;

  }
  reSelect(event: any) {
    this.selection?.removeAllRanges();
    this.selection?.addRange(this.range);

  }

  selectShadowColor(shadow: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);
    if (
      (parentNode?.parentNode.nodeName == 'SPAN' ||
        parentNode?.parentNode.nodeName == 'LI') &&
      parentNode?.parentNode.innerText == selectedText
    ) {
      let htmlText: any = parentNode.parentNode.innerHTML;

      for (let singleClass of parentNode.parentNode.classList) {
        for (let sh of this.colors) {
          if (singleClass == sh.shadow)
            parentNode.parentNode.classList.remove(singleClass);

          for (let i = 0; i < parentNode.parentNode.childElementCount; i++) {
            htmlText = htmlText.replace(sh.shadow, '');
          }
        }
      }
      parentNode.parentNode.classList.add(shadow);
      parentNode.parentNode.innerHTML = htmlText;
    } else if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      let htmlText: any = parentNode.innerHTML;

      for (let singleClass of parentNode.classList) {
        for (let sh of this.colors) {
          if (singleClass == sh.shadow)
            parentNode.classList.remove(singleClass);
          for (let i = 0; i < parentNode.childElementCount; i++) {
            htmlText = htmlText.replace(sh.shadow, '');
          }
        }
      }
      parentNode.classList.add(shadow);
      parentNode.innerHTML = htmlText;
    } else {
      var span = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      for (let i = 0; i < span.childElementCount; i++) {
        for (let sh of this.colors) {
          span.innerHTML = span.innerHTML.replace(sh.shadow, '');
        }
      }
      span.className = shadow;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }
  selectTextHeight(lineHeight: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'lineHeight');
      parentNode.style.lineHeight = lineHeight + 'px';
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'lineHeight');
      span.style.lineHeight = lineHeight + 'px';
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }
  selectTextAlign(align: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {

      this.loop(parentNode, 'textAlign');
      parentNode.style.display = 'block';
      parentNode.style.textAlign = align;


    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'textAlign');
      span.style.display = 'block';
      span.style.textAlign = align;


      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  selectFont(fontFamily: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'fontFamily');
      parentNode.style.fontFamily = fontFamily;
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'fontFamily');
      span.style.fontFamily = fontFamily;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  selectFontSize(fontSize: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'fontSize');
      parentNode.style.fontSize = fontSize + 'px';
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'fontSize');
      span.style.fontSize = fontSize + 'px';
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  loop(node: any, style: string) {

    for (let child of node.children) {
      this.loop(child, style);
    }
    node.style[style] = '';
    return;
  }

  selectTxtColor(ev: any) {
    var txtColor = `rgba(${ev.color.rgb.r}, ${ev.color.rgb.g}, ${ev.color.rgb.b}, ${ev.color.rgb.a})`;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'color');
      parentNode.style.color = txtColor;
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'color');
      span.style.color = txtColor;
      range.insertNode(span);
    }
  }

  makeBold(fontWeight: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'fontWeight');
      parentNode.style.fontWeight = fontWeight;
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'fontWeight');
      span.style.fontWeight = fontWeight;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  selectFontStyle(fontStyle: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'fontStyle');
      parentNode.style.fontStyle = fontStyle;
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'fontStyle');
      span.style.fontStyle = fontStyle;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }
  removeAllStyle() {
    let newText = this.text.innerText;
    this.text.innerText = newText;
  }

  selectFlexBox(flex: any) { }

  selectTextDecoration(textDecoration: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'textDecoration');
      parentNode.style.textDecoration = textDecoration;
      if (!parentNode.style.display)
        parentNode.style.display = 'inline-block';
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'textDecoration');
      span.style.textDecoration = textDecoration;
      if (!span.style.display)
        span.style.display = 'inline-block';

      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  selectTextTransformation(textTransformation: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);
    if (
      (parentNode?.parentNode.nodeName == 'SPAN' ||
        parentNode?.parentNode.nodeName == 'LI') &&
      parentNode?.parentNode.innerText == selectedText
    ) {
      let htmlText: any = parentNode.parentNode.innerHTML;

      for (let singleClass of parentNode.parentNode.classList) {
        for (let tt of this.textTransformations) {
          if (singleClass == tt.className)
            parentNode.parentNode.classList.remove(singleClass);

          for (let i = 0; i < parentNode.parentNode.childElementCount; i++) {
            htmlText = htmlText.replace(tt.className, '');
          }
        }
      }
      parentNode.parentNode.classList.add(textTransformation);
      parentNode.parentNode.innerHTML = htmlText;
    } else if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      let htmlText: any = parentNode.innerHTML;

      for (let singleClass of parentNode.classList) {
        for (let tt of this.textTransformations) {
          if (singleClass == tt.className)
            parentNode.classList.remove(singleClass);
          for (let i = 0; i < parentNode.childElementCount; i++) {
            htmlText = htmlText.replace(tt.className, '');
          }
        }
      }
      parentNode.classList.add(textTransformation);
      parentNode.innerHTML = htmlText;
    } else {
      var span = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      for (let i = 0; i < span.childElementCount; i++) {
        for (let tt of this.textTransformations) {
          span.innerHTML = span.innerHTML.replace(tt.className, '');
        }
      }
      span.className = textTransformation;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }
  makeUnderline1() { }

  selectBgColor(ev: any) {

    var bg = `rgba(${ev.color.rgb.r}, ${ev.color.rgb.g}, ${ev.color.rgb.b}, ${ev.color.rgb.a})`;
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);

    if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      this.loop(parentNode, 'backgroundColor');
      parentNode.style.backgroundColor = bg;
    } else {
      var span: any = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      this.loop(span, 'backgroundColor');
      span.style.backgroundColor = bg;
      range.insertNode(span);
    }

    // selection?.removeAllRanges();
  }

  addList() {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var parentNode: any = selection!.focusNode!.parentNode;
    var span = document.createElement('SPAN');
    var li = document.createElement('LI');
    console.log('nodeName');

    console.log(parentNode.nodeName);
    var htmlText: any = parentNode.parentNode.innerHTML;

    range = selection!.getRangeAt(0);
    if (
      parentNode?.nodeName == 'LI' &&
      parentNode.textContent == selection?.toString()
    ) {
      // selection?.focusNode!.parentNode!.removeChild(li)

      parentNode.parentNode.innerHTML = parentNode.parentNode.innerHTML.replace(
        'li',
        'span'
      );

      console.log('ok1');
      console.log(parentNode);
    } else {
      if (
        parentNode?.nodeName == 'SPAN' &&
        parentNode.parentNode.innerText == selection?.toString()
      ) {
        parentNode.parentNode.innerHTML =
          parentNode.parentNode.innerHTML.replace('span', 'li');

        console.log('???');
      }
      if (
        parentNode?.nodeName == 'DIV' ||
        parentNode.parentNode.innerText != selection?.toString()
      ) {
        if (parentNode.parentNode.innerText == selection?.toString()) {
          li.innerHTML = htmlText;
        }
        if (parentNode.parentNode.innerText != selection?.toString()) {
          li.textContent = selection!.toString();
        }
        range.deleteContents();
        range.insertNode(li);
      }
    }
    selection?.removeAllRanges();
  }

  selectClass(addedClass: any) {
    var selection = window.getSelection();
    var range = selection!.getRangeAt(0);
    var selectedText = selection?.toString();
    var parentNode: any = selection!.focusNode!.parentNode!;
    range = selection!.getRangeAt(0);
    if (
      (parentNode?.parentNode.nodeName == 'SPAN' ||
        parentNode?.parentNode.nodeName == 'LI') &&
      parentNode?.parentNode.innerText == selectedText
    ) {
      let htmlText: any = parentNode.parentNode.innerHTML;

      for (let singleClass of parentNode.parentNode.classList) {
        if (singleClass == addedClass)
          parentNode.parentNode.classList.remove(singleClass);
      }
      parentNode.parentNode.classList.add(addedClass);
      parentNode.parentNode.innerHTML = htmlText;
    } else if (
      (parentNode?.nodeName == 'SPAN' || parentNode?.nodeName == 'LI') &&
      parentNode?.innerText == selectedText
    ) {
      let htmlText: any = parentNode.innerHTML;

      for (let singleClass of parentNode.parentNode.classList) {
        if (singleClass == addedClass)
          parentNode.parentNode.classList.remove(singleClass);
      }
      parentNode.classList.add(addedClass);
      parentNode.innerHTML = htmlText;
    } else {
      var span = document.createElement('SPAN');
      span.appendChild(range.extractContents());
      span.className = addedClass;
      range.insertNode(span);
    }
    selection?.removeAllRanges();
  }

  addClass(event: any) {
    this.classIsAvailableError = false;

    for (let cName of this.addedClasses) {
      if (event.value === cName) {
        this.classIsAvailableError = true;
        return;
      }
    }
    if (!this.classIsAvailableError) this.addedClasses.push(event.value);

    console.log(this.addedClasses);
    console.log(event.value);
  }

  noding(node: any, index: any): any {
    console.log('node0');
    console.log(node);

    for (let i = index; i < node.childNodes.length; i++) {
      var biggerNode = node.childNodes.item(i).parentNode;
      var lastIndex = i;
      if (
        node.childNodes.item(i).hasChildNodes() &&
        node.childNodes.item(i).innerText != ''
      ) {
        return this.noding(node.childNodes.item(i), 0);
      } else {
        node.removeChild(node.childNodes.item(i));
        continue;
      }
    }
    if (biggerNode.parentNode.nodeName != 'DIV') {
      if (biggerNode.length - 1 == lastIndex) {
        biggerNode = biggerNode.parentNode;
      }
      return this.noding(biggerNode.parentNode, lastIndex);
    }
  }
  // removeEmptyTags(text: any) {
  //   for (let i = 0; i < text.childNodes.length; i++) {
  //     if (text.childNodes[i].innerText === '') {
  //       text.removeChild(text.childNodes[i]);
  //     }
  //   }
  // }

  removeEmptyTags(text: any) {
    // var newDom = '';

    for (let child of text.childNodes) {
      if (child.style && child.style.length) {
        this.newDom += child.outerHTML;
      } else if (!child.style || child.style.length == 0) {
        this.newDom += child.textContent;
      }
    }
    // if (text.nodeName != 'DIV')
  }
  showHtml() {
    this.text = document.getElementById('text');
    // this.removeEmptyTags(this.text);

    this.text.innerText = this.text.innerHTML;
  }
  showText() {
    this.text = document.getElementById('text');
    // this.removeEmptyTags(this.text);

    this.text.innerHTML = this.text.innerText;
  }
  log() {
    console.log('okkkkkk');
  }
  removeFocus(id: string) {
    const inputEl = this.el.nativeElement.querySelector(id);
    inputEl.blur();
  }

  loadFontLink(fontLink: string) {
    const fontScript = this.renderer.createElement('link');
    fontScript.rel = 'stylesheet';
    fontScript.href = fontLink;

    this.renderer.appendChild(document.head, fontScript);
    var element: any = document.getElementById('sondos');

    this.renderer.setStyle(element, 'font-family', "'Dancing Script', cursive");
  }





















  get(key1: any, key2: any) {
    var obj: any = {};
    var arr: any[] = [];
    for (let car of this.mycars) {
      if (!obj[car[key1]]) {
        obj[car[key1]] = [];
        obj[car[key1]].push(car[key2])
      }
      else {
        obj[car[key1]].push(car[key2])
      }
    }
    console.log(obj)
  }




  mycars: any = [{ "year": 2016, "id": 1, "horsepower": 201, "make": "acura", "model": "ilx", "price": 31890.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M7656c6f6aaa4d51c3ddee4b1192adeeeH0&pid=15.1" }, { "year": 2016, "id": 2, "horsepower": 279, "make": "acura", "model": "rdx", "price": 40370.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M9e8c70aff2632ee58fc97806bf5b83ffH0&pid=15.1" }, { "year": 2016, "id": 3, "horsepower": 377, "make": "acura", "model": "rlx", "price": 65950.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mab377a39ce357ff2b18160e770e8822cH0&pid=15.1" }, { "year": 2016, "id": 4, "horsepower": 290, "make": "acura", "model": "tlx", "price": 44800.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M7027fde17ca39f879ff85c98171367afH0&pid=15.1" }, { "year": 2016, "id": 5, "horsepower": 237, "make": "alfa-romeo", "model": "4c", "price": 55900.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8a3a74ca54214aa8f59f312b20d67407H0&pid=15.1" }, { "year": 2016, "id": 6, "horsepower": 237, "make": "alfa-romeo", "model": "4c-spider", "price": 63900.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mc2a03f245da8da7c5b9255ecda1c234co0&pid=15.1" }, { "year": 2016, "id": 7, "horsepower": 540, "make": "aston-martin", "model": "db9-gt", "price": 198250.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M6ea50edfaf424f185331d4840b695e73o0&pid=15.1" }, { "year": 2016, "id": 8, "horsepower": 552, "make": "aston-martin", "model": "rapide-s", "price": 206000.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8405c51f97d104b4eb7cdfec4e80bb5bo0&pid=15.1" }, { "year": 2016, "id": 9, "horsepower": 565, "make": "aston-martin", "model": "v12-vantage-s", "price": 198195.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M37dc9b347ed530569b2063f0988c9a0fH0&pid=15.1" }, { "year": 2016, "id": 10, "horsepower": 430, "make": "aston-martin", "model": "v8-vantage", "price": 109000.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mb3321ac399a0b3715da3d6a7186098f5H0&pid=15.1" }, { "year": 2016, "id": 11, "horsepower": 568, "make": "aston-martin", "model": "vanquish", "price": 287650.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M4b591ff33d9cc70606ddc92e272f9365H0&pid=15.1" }, { "year": 2016, "id": 12, "horsepower": 150, "make": "audi", "model": "a3", "price": 42050.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M4fb83fa38daee899e5f9ad959228d1a2H0&pid=15.1" }, { "year": 2016, "id": 13, "horsepower": 204, "make": "audi", "model": "a3-sportback-e-tron", "price": 46800.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M8a13b36688b9093aa1aad5d463b9fccdo0&pid=15.1" }, { "year": 2017, "id": 14, "horsepower": 252, "make": "audi", "model": "a4", "price": 41100.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5f243f1b175f98760155d0a4536c6f8cH0&pid=15.1" }, { "year": 2016, "id": 15, "horsepower": 252, "make": "audi", "model": "a6", "price": 52100.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1" }, { "year": 2016, "id": 16, "horsepower": 333, "make": "audi", "model": "a7", "price": 70950.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf0b19510177fba1c2bfdc5997876bb2eH0&pid=15.1" }, { "year": 2016, "id": 17, "horsepower": 450, "make": "audi", "model": "a8", "price": 90500.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M8b4a9d0b8bb0df22730a6ad913d8b684H0&pid=15.1" }, { "year": 2016, "id": 18, "horsepower": 200, "make": "audi", "model": "q3", "price": 33700.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M2d0b16b8ecf93f68d2d40c41719e1036H0&pid=15.1" }, { "year": 2016, "id": 19, "horsepower": 220, "make": "audi", "model": "q5", "price": 40900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mc096c3be6c7a745ad103236721e34867H0&pid=15.1" }, { "year": 2017, "id": 20, "horsepower": 333, "make": "audi", "model": "q7", "price": 58800.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M8fecf4e177901193609112640d703547H0&pid=15.1" }, { "year": 2017, "id": 21, "horsepower": 540, "make": "audi", "model": "r8", "price": 162900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mae0e3f2e814b5ebac8e7d27799ef6712H0&pid=15.1" }, { "year": 2015, "id": 22, "horsepower": 450, "make": "audi", "model": "rs-5", "price": 79200.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M90b0d4dbe568d0df29364acb15f37114o0&pid=15.1" }, { "year": 2016, "id": 23, "horsepower": 560, "make": "audi", "model": "rs-7", "price": 108900.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9fdd8b8f93b83e51af5523f38161426fH0&pid=15.1" }, { "year": 2016, "id": 24, "horsepower": 292, "make": "audi", "model": "s3", "price": 48650.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md03aed73b14cbf9ebef7cf153c52cadaH0&pid=15.1" }, { "year": 2016, "id": 25, "horsepower": 333, "make": "audi", "model": "s4", "price": 55100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M82eb472303f4caa475f9f3a115451d3dH0&pid=15.1" }, { "year": 2016, "id": 26, "horsepower": 333, "make": "audi", "model": "s5", "price": 59350.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Meb8c602b80480f662e4cd967c93de067H0&pid=15.1" }, { "year": 2016, "id": 27, "horsepower": 450, "make": "audi", "model": "s6", "price": 75300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mdb625c7a94be0963ec921b9290e1ea65H0&pid=15.1" }, { "year": 2016, "id": 28, "horsepower": 450, "make": "audi", "model": "s7", "price": 82900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mb72e959b68722453be7e89e11d1fdbeeH0&pid=15.1" }, { "year": 2016, "id": 29, "horsepower": 605, "make": "audi", "model": "s8", "price": 114900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mb3593738cde579214af0a448ae4b84deH0&pid=15.1" }, { "year": 2016, "id": 30, "horsepower": 354, "make": "audi", "model": "sq5", "price": 60800.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M1024a53f801da1942285f3d0e2721555H0&pid=15.1" }, { "year": 2016, "id": 31, "horsepower": 220, "make": "audi", "model": "tt", "price": 46400.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Me6cec521bfabe34fc8c1ad225d512093H0&pid=15.1" }, { "year": 2016, "id": 32, "horsepower": 292, "make": "audi", "model": "tts", "price": 51900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5af1f3cb9bc5ecd52ff48156b08ef5b0H0&pid=15.1" }, { "year": 2016, "id": 33, "horsepower": 220, "make": "audi", "model": "allroad", "price": 42700.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Me2d3d40dfdaf8d2ac389a3515466f0b9H0&pid=15.1" }, { "year": 2016, "id": 34, "horsepower": 240, "make": "bmw", "model": "2-series", "price": 38650.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8d2ce327068244565567a1db316398a6H0&pid=15.1" }, { "year": 2016, "id": 35, "horsepower": 240, "make": "bmw", "model": "3-series", "price": 38350.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M23f6b0f90f24a3ec99fe227ef589c787H0&pid=15.1" }, { "year": 2016, "id": 36, "horsepower": 300, "make": "bmw", "model": "3-series-gran-turismo", "price": 49200.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mc75fa0e340932e6cf464cd86e3634f67H0&pid=15.1" }, { "year": 2016, "id": 37, "horsepower": 300, "make": "bmw", "model": "4-series", "price": 56950.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M9e5565480094a5717411c0ae75bee837H0&pid=15.1" }, { "year": 2016, "id": 38, "horsepower": 300, "make": "bmw", "model": "4-series-gran-coupe", "price": 49950.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M0d926544d83e5fbc63253d78424d492bo0&pid=15.1" }, { "year": 2016, "id": 39, "horsepower": 443, "make": "bmw", "model": "5-series", "price": 68600.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M9bc53ff98dd6355041b33ef32b33d9e9o0&pid=15.1" }, { "year": 2016, "id": 40, "horsepower": 300, "make": "bmw", "model": "5-series-gran-turismo", "price": 63200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M7837b1c0e787a2bba280130d894225dfH0&pid=15.1" }, { "year": 2016, "id": 41, "horsepower": 315, "make": "bmw", "model": "6-series", "price": 77300.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M2684e57d99815199e39737bc61a2eb64H0&pid=15.1" }, { "year": 2016, "id": 42, "horsepower": 315, "make": "bmw", "model": "6-series-gran-coupe", "price": 82500.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mac27d3a378d6391fbae790116892e3f3H0&pid=15.1" }, { "year": 2016, "id": 43, "horsepower": 445, "make": "bmw", "model": "7-series", "price": 94400.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M94fb4f09a477b76e2cd390330aeeb838H0&pid=15.1" }, { "year": 2016, "id": 44, "horsepower": 600, "make": "bmw", "model": "alpina-b6-gran-coupe", "price": 122200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mcb157e037f7fbcd69aa71771cb9744f4o0&pid=15.1" }, { "year": 2015, "id": 45, "horsepower": 540, "make": "bmw", "model": "alpina-b7", "price": 132200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Med4626b4e1dde7937edddca49b960944H0&pid=15.1" }, { "year": 2016, "id": 46, "horsepower": 335, "make": "bmw", "model": "activehybrid-5", "price": 62100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mc2451243f52da622db6886fae2804340o0&pid=15.1" }, { "year": 2015, "id": 47, "horsepower": 335, "make": "bmw", "model": "activehybrid-7", "price": 84300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M6bd068af8f088e25b8cd56276d430582o0&pid=15.1" }, { "year": 2016, "id": 48, "horsepower": 365, "make": "bmw", "model": "m2", "price": 51700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M6f0d4793d1b4c2624e947f935a477d08o0&pid=15.1" }, { "year": 2016, "id": 49, "horsepower": 425, "make": "bmw", "model": "m3", "price": 63500.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mc2544b1749e24db7e6cd00add0418290H0&pid=15.1" }, { "year": 2016, "id": 50, "horsepower": 425, "make": "bmw", "model": "m4", "price": 65700.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf11cbc701eace090d246e287181d46fbH0&pid=15.1" }, { "year": 2016, "id": 51, "horsepower": 560, "make": "bmw", "model": "m5", "price": 94100.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M5e0d7d271dec276389600eeafacac4e0o0&pid=15.1" }, { "year": 2016, "id": 52, "horsepower": 552, "make": "bmw", "model": "m6", "price": 113400.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mdc6bb101eb9a788a07a58a5716abedcfo0&pid=15.1" }, { "year": 2016, "id": 53, "horsepower": 552, "make": "bmw", "model": "m6-gran-coupe", "price": 117200.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mde8ec5842856b4b7211eeb7ca41f9246H0&pid=15.1" }, { "year": 2016, "id": 54, "horsepower": 228, "make": "bmw", "model": "x1", "price": 34800.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M0f90d3554a09f2e7ea53210aeef868caH0&pid=15.1" }, { "year": 2016, "id": 55, "horsepower": 300, "make": "bmw", "model": "x3", "price": 46800.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf6315faccfb9cb4d52485fabec358403H0&pid=15.1" }, { "year": 2016, "id": 56, "horsepower": 360, "make": "bmw", "model": "x4", "price": 57800.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M1b9ad0f0cf20b47bdd2d7e404fa7bd8cH0&pid=15.1" }, { "year": 2016, "id": 57, "horsepower": 445, "make": "bmw", "model": "x5", "price": 71500.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M0bf6e91ac412aa30b5e62fee045e3db5H0&pid=15.1" }, { "year": 2016, "id": 58, "horsepower": 567, "make": "bmw", "model": "x5-m", "price": 98800.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mec012f08e524b6931ae2473537935d9bH0&pid=15.1" }, { "year": 2016, "id": 59, "horsepower": 240, "make": "bmw", "model": "x5-edrive", "price": 62100.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf833f47a924276fde133c495e2766e97o0&pid=15.1" }, { "year": 2016, "id": 60, "horsepower": 300, "make": "bmw", "model": "x6", "price": 60600.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Me5cb5e3951c6ebbeda7ee4627d92d7feH0&pid=15.1" }, { "year": 2016, "id": 61, "horsepower": 567, "make": "bmw", "model": "x6-m", "price": 102200.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0993ef7e55584816ac79cf850d775304H0&pid=15.1" }, { "year": 2016, "id": 62, "horsepower": 335, "make": "bmw", "model": "z4", "price": 66350.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M866fb4ba5b8091690ad048e40ee35cffH0&pid=15.1" }, { "year": 2016, "id": 63, "horsepower": 170, "make": "bmw", "model": "i3", "price": 42400.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M8383a16f24040cf25473ece30fc89f37H0&pid=15.1" }, { "year": 2016, "id": 64, "horsepower": 357, "make": "bmw", "model": "i8", "price": 140700.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8cbb2251062f0f8b4a6b3f8a391af193o0&pid=15.1" }, { "year": 2015, "id": 65, "horsepower": 500, "make": "bentley", "model": "continental-gt", "price": 187900.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M3e346539eff432143d5891edd79e9871o0&pid=15.1" }, { "year": 2015, "id": 66, "horsepower": 616, "make": "bentley", "model": "flying-spur", "price": 215800.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf8de54f26e0810a608721e0e71628e9dH0&pid=15.1" }, { "year": 2015, "id": 67, "horsepower": 505, "make": "bentley", "model": "mulsanne", "price": 303700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M445cbf9ba7d6b50a7f2aefa2d98614e7H0&pid=15.1" }, { "year": 2016, "id": 68, "horsepower": 200, "make": "buick", "model": "cascada", "price": 33065.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M953cc59785af08d0e0307ece19a13982o0&pid=15.1" }, { "year": 2016, "id": 69, "horsepower": 259, "make": "buick", "model": "regal", "price": 31415.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M6ec15d0557ef8bbc52808ce8026387bao0&pid=15.1" }, { "year": 2016, "id": 70, "horsepower": 250, "make": "buick", "model": "verano", "price": 28670.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M68df926f105a28b830d4e4e2ef7fb639H0&pid=15.1" }, { "year": 2016, "id": 71, "horsepower": 202, "make": "cadillac", "model": "ats", "price": 33215.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb70fcc9ce0e29fc1e2d53c394bf6f20cH0&pid=15.1" }, { "year": 2016, "id": 72, "horsepower": 272, "make": "cadillac", "model": "ats-coupe", "price": 47445.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mc032c513b1564257e852b05f3ca49a03H0&pid=15.1" }, { "year": 2016, "id": 73, "horsepower": 464, "make": "cadillac", "model": "ats-v", "price": 62665.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M692fa0cd4bf86b27e98220ba3b4746d9o0&pid=15.1" }, { "year": 2016, "id": 74, "horsepower": 335, "make": "cadillac", "model": "ct6", "price": 63570.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md00e44384ad47f6dec7cda72086231d3o0&pid=15.1" }, { "year": 2016, "id": 75, "horsepower": 268, "make": "cadillac", "model": "cts", "price": 56285.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Md8a3d59ae79adc48c3940e8c229496ddH0&pid=15.1" }, { "year": 2016, "id": 76, "horsepower": 640, "make": "cadillac", "model": "cts-v", "price": 83995.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M3c13b05ab3502e3f8322c0fba8e1df19H0&pid=15.1" }, { "year": 2015, "id": 77, "horsepower": 556, "make": "cadillac", "model": "cts-v-coupe", "price": 69900.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M2a1313b36a666c7c389031917277bde4H0&pid=15.1" }, { "year": 2016, "id": 78, "horsepower": 233, "make": "cadillac", "model": "elr", "price": 65000.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mada1defb3023c60b5203d51a4b7a997co0&pid=15.1" }, { "year": 2016, "id": 79, "horsepower": 420, "make": "cadillac", "model": "escalade", "price": 79645.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M8e0f68ea4467619238c1803e1618edb9H0&pid=15.1" }, { "year": 2016, "id": 80, "horsepower": 420, "make": "cadillac", "model": "escalade-esv", "price": 78570.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5baed42e82b946c33269e2966892e125H0&pid=15.1" }, { "year": 2016, "id": 81, "horsepower": 308, "make": "cadillac", "model": "srx", "price": 46135.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M3d488dd13ce0222bac1eda0322f3b6ebH0&pid=15.1" }, { "year": 2017, "id": 82, "horsepower": 310, "make": "cadillac", "model": "xt5", "price": 44895.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mf7dcaecb46397c8d9f463d37d1034885o0&pid=15.1" }, { "year": 2016, "id": 83, "horsepower": 410, "make": "cadillac", "model": "xts", "price": 72320.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M97ed9c913836518b11b4374d9233737eH0&pid=15.1" }, { "year": 2016, "id": 84, "horsepower": 455, "make": "chevrolet", "model": "camaro", "price": 36300.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M87b9eb9ed18d5439ea23dc6913d84860H0&pid=15.1" }, { "year": 2016, "id": 85, "horsepower": 131, "make": "chevrolet", "model": "city-express", "price": 23515.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8b3021df26532294af9c9558a1bf73b6H0&pid=15.1" }, { "year": 2016, "id": 86, "horsepower": 305, "make": "chevrolet", "model": "colorado", "price": 30305.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb99c0fd0221f7c96127aa21e707957b8H0&pid=15.1" }, { "year": 2016, "id": 87, "horsepower": 460, "make": "chevrolet", "model": "corvette", "price": 64855.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8ef3526ca60ff6cc185e4212ec183dd7H0&pid=15.1" }, { "year": 2016, "id": 88, "horsepower": 153, "make": "chevrolet", "model": "cruze", "price": 23120.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mba6c3812b453d66138fdc188dcfcd02bo0&pid=15.1" }, { "year": 2016, "id": 89, "horsepower": 138, "make": "chevrolet", "model": "cruze-limited", "price": 20195.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb11af05c5ea28380b47a63128e5aed0eo0&pid=15.1" }, { "year": 2016, "id": 90, "horsepower": 285, "make": "chevrolet", "model": "express", "price": 37155.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8b3021df26532294af9c9558a1bf73b6H0&pid=15.1" }, { "year": 2016, "id": 91, "horsepower": 285, "make": "chevrolet", "model": "express-cargo", "price": 30595.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M5ffcf6b75b7208008e660950a55606bbo0&pid=15.1" }, { "year": 2016, "id": 92, "horsepower": 195, "make": "chevrolet", "model": "impala", "price": 29460.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M59faebaddf78c5ba590b8dce240e737bo0&pid=15.1" }, { "year": 2016, "id": 93, "horsepower": 163, "make": "chevrolet", "model": "malibu", "price": 21625.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M61f74b60fa70801a7bbc75bd179b03ceo0&pid=15.1" }, { "year": 2016, "id": 94, "horsepower": 197, "make": "chevrolet", "model": "malibu-limited", "price": 22565.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M14651c702fd8d915acb220bb9dfcfba1o0&pid=15.1" }, { "year": 2016, "id": 95, "horsepower": 415, "make": "chevrolet", "model": "ss", "price": 46575.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3c57eb95bab2ba7b0a834c8422c740caH0&pid=15.1" }, { "year": 2016, "id": 96, "horsepower": 355, "make": "chevrolet", "model": "silverado-1500", "price": 40950.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M49d2e010d6da108e6fbd0f8138dba43dH0&pid=15.1" }, { "year": 2016, "id": 97, "horsepower": 138, "make": "chevrolet", "model": "sonic", "price": 17545.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3d1148f419582d79b4db3c49949f0387H0&pid=15.1" }, { "year": 2016, "id": 98, "horsepower": 98, "make": "chevrolet", "model": "spark", "price": 12660.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Me866c0e8b7142b4afa5679f5b4b01b78H0&pid=15.1" }, { "year": 2016, "id": 99, "horsepower": 140, "make": "chevrolet", "model": "spark-ev", "price": 25510.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mff603da581429d87109cfbf9d6a3502eH0&pid=15.1" }, { "year": 2016, "id": 100, "horsepower": 360, "make": "chevrolet", "model": "suburban", "price": 79715.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M191290f07def0e2660d5c3c4dc4070bdH0&pid=15.1" }, { "year": 2016, "id": 101, "horsepower": 355, "make": "chevrolet", "model": "tahoe", "price": 50000.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mab63a25b354d8baaa1860b294cfa68e8H0&pid=15.1" }, { "year": 2016, "id": 102, "horsepower": 138, "make": "chevrolet", "model": "trax", "price": 25230.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M926aac7e8962b11e4d018676a49dd575H0&pid=15.1" }, { "year": 2016, "id": 103, "horsepower": 295, "make": "chrysler", "model": "200", "price": 29905.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M81801e1fc9e9aaac11c4949c61aa1a1eH0&pid=15.1" }, { "year": 2016, "id": 104, "horsepower": 292, "make": "chrysler", "model": "300", "price": 34515.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mcb7ffeccaefae6c65b2683ef2d7899e0H0&pid=15.1" }, { "year": 2017, "id": 105, "horsepower": 287, "make": "chrysler", "model": "pacifica", "price": 34495.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M1d51d0e59ddc41e4f68f2b83784d71ddH0&pid=15.1" }, { "year": 2016, "id": 106, "horsepower": 485, "make": "dodge", "model": "challenger", "price": 37995.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M4af6bf5011176e918d22d077529562a4H0&pid=15.1" }, { "year": 2016, "id": 107, "horsepower": 292, "make": "dodge", "model": "charger", "price": 31995.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mbf353cec2220a4bb944ef751e2a6f830H0&pid=15.1" }, { "year": 2016, "id": 108, "horsepower": 184, "make": "dodge", "model": "dart", "price": 22095.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M33e9e1d443b5eb7c382b8bf8597a1b11H0&pid=15.1" }, { "year": 2016, "id": 109, "horsepower": 293, "make": "dodge", "model": "durango", "price": 39595.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M6277c5eee2e72f88c9ab2173e525380dH0&pid=15.1" }, { "year": 2016, "id": 110, "horsepower": 283, "make": "dodge", "model": "grand-caravan", "price": 27795.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mcdff6bf92a293e2c6e6159d5d6fda088H0&pid=15.1" }, { "year": 2016, "id": 111, "horsepower": 283, "make": "dodge", "model": "journey", "price": 29795.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M255896e8c53ace7f98f472576e4a458fH0&pid=15.1" }, { "year": 2016, "id": 112, "horsepower": 645, "make": "dodge", "model": "viper", "price": 107995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M0e86a3956a2ea2743f45abf54c5ce217H0&pid=15.1" }, { "year": 2016, "id": 113, "horsepower": 135, "make": "fiat", "model": "500", "price": 19700.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M522df7e8ee4e17f28f4941d3a2944ce6H0&pid=15.1" }, { "year": 2016, "id": 114, "horsepower": 160, "make": "fiat", "model": "500l", "price": 24795.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M2dee910aeb9f8d822763a1e469b3bf07H0&pid=15.1" }, { "year": 2016, "id": 115, "horsepower": 180, "make": "fiat", "model": "500x", "price": 29110.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mde3d40f9e392fb9cbb8bb02423cabc7aH0&pid=15.1" }, { "year": 2015, "id": 116, "horsepower": 597, "make": "ferrari", "model": "458-italia", "price": 291744.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mac3ed93171abc87dc5fc23ca22625d4fH0&pid=15.1" }, { "year": 2015, "id": 117, "horsepower": 553, "make": "ferrari", "model": "california-t", "price": 198973.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M2c402ad13ff2d98eefc5d7f29ba7b70aH0&pid=15.1" }, { "year": 2015, "id": 118, "horsepower": 731, "make": "ferrari", "model": "f12-berlinetta", "price": 319995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M4d070cc065dcdeeb494584a196562909H0&pid=15.1" }, { "year": 2015, "id": 119, "horsepower": 651, "make": "ferrari", "model": "ff", "price": 295000.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M4ae89882369212f543db113424e65629H0&pid=15.1" }, { "year": 2016, "id": 120, "horsepower": 188, "make": "ford", "model": "c-max-energi", "price": 31770.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6750cf694eb01516ba56c9c15bbedf63o0&pid=15.1" }, { "year": 2016, "id": 121, "horsepower": 188, "make": "ford", "model": "c-max-hybrid", "price": 27170.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M9668046e255f3da4d048ec049d860e08H0&pid=15.1" }, { "year": 2016, "id": 122, "horsepower": 245, "make": "ford", "model": "edge", "price": 37595.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M56bb7e997b64f67b032346cd54e63300H0&pid=15.1" }, { "year": 2017, "id": 123, "horsepower": 168, "make": "ford", "model": "escape", "price": 23600.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mc3831bffd2d232bd0e26436351fe999dH0&pid=15.1" }, { "year": 2016, "id": 124, "horsepower": 290, "make": "ford", "model": "explorer", "price": 43300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3eba412f6b5b7d8de387d3d1ceebbc4cH0&pid=15.1" }, { "year": 2016, "id": 125, "horsepower": 440, "make": "ford", "model": "f-450-super-duty", "price": 53060.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0693e2806aa0f5e5fbb81c3c0febfe3eH0&pid=15.1" }, { "year": 2016, "id": 126, "horsepower": 197, "make": "ford", "model": "fiesta", "price": 21460.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M4026af99696a7593a555280c54148995H0&pid=15.1" }, { "year": 2016, "id": 127, "horsepower": 287, "make": "ford", "model": "flex", "price": 39750.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M321e2994fa05e94e75473bbcc67ba76bH0&pid=15.1" }, { "year": 2016, "id": 128, "horsepower": 350, "make": "ford", "model": "focus-rs", "price": 35730.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M5603f020d2c447a0ccbfde236762e762H0&pid=15.1" }, { "year": 2016, "id": 129, "horsepower": 252, "make": "ford", "model": "focus-st", "price": 24425.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M2f1c6f7c1a4768ef51c7a7746bc9b560H0&pid=15.1" }, { "year": 2017, "id": 130, "horsepower": 325, "make": "ford", "model": "fusion", "price": 33360.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M585995c051d2384c7110f4d62b4ac77bH0&pid=15.1" }, { "year": 2017, "id": 131, "horsepower": 188, "make": "ford", "model": "fusion-energi", "price": 33120.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Ma75f60b46c98c814e9dacf813cf74934o0&pid=15.1" }, { "year": 2017, "id": 132, "horsepower": 188, "make": "ford", "model": "fusion-hybrid", "price": 37020.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M761fd9c9f56a095f72f8fb8982872af4o0&pid=15.1" }, { "year": 2016, "id": 133, "horsepower": 435, "make": "ford", "model": "mustang", "price": 36395.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6f7a00de13eb07d30a1e813a867a5ae4H0&pid=15.1" }, { "year": 2016, "id": 134, "horsepower": 526, "make": "ford", "model": "shelby-gt350", "price": 47795.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Ma1414c8e75994bf865740d534be06cedo0&pid=15.1" }, { "year": 2016, "id": 135, "horsepower": 288, "make": "ford", "model": "taurus", "price": 29540.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mdcc1e9ad95cbdc02c7ab5324378d87a7H0&pid=15.1" }, { "year": 2016, "id": 136, "horsepower": 169, "make": "ford", "model": "transit-connect", "price": 24200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M6daa6fe34188c3b121422db6325803caH0&pid=15.1" }, { "year": 2016, "id": 137, "horsepower": 310, "make": "ford", "model": "transit-van", "price": 41690.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M27a833df741fa8c8168dba3d112c429cH0&pid=15.1" }, { "year": 2016, "id": 138, "horsepower": 310, "make": "ford", "model": "transit-wagon", "price": 43995.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M340ec70d00bacb2571a62629b55250afH0&pid=15.1" }, { "year": 2017, "id": 139, "horsepower": 194, "make": "gmc", "model": "acadia", "price": 29070.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M06c282e7939d2385671824770325e71fH0&pid=15.1" }, { "year": 2016, "id": 140, "horsepower": 305, "make": "gmc", "model": "canyon", "price": 30405.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M437504754bd68608588e6bf1daaeaa64o0&pid=15.1" }, { "year": 2016, "id": 141, "horsepower": 260, "make": "gmc", "model": "savana", "price": 50095.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M397b2edcc4113239e9159405e71fe1faH0&pid=15.1" }, { "year": 2016, "id": 142, "horsepower": 260, "make": "gmc", "model": "savana-cargo", "price": 44400.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M778a04f1e73f85f3cf7d7450d2ee88efH0&pid=15.1" }, { "year": 2016, "id": 143, "horsepower": 360, "make": "gmc", "model": "sierra-2500hd", "price": 38865.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M9f9792a38549772e55e2928b542271dfH0&pid=15.1" }, { "year": 2016, "id": 144, "horsepower": 360, "make": "gmc", "model": "sierra-3500hd", "price": 37960.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf262b76d5dbbd798b8683996698c6ff6o0&pid=15.1" }, { "year": 2016, "id": 145, "horsepower": 182, "make": "gmc", "model": "terrain", "price": 23975.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Md7b20aec6c322e3e16952ef2b2a18b8aH0&pid=15.1" }, { "year": 2016, "id": 146, "horsepower": 355, "make": "gmc", "model": "yukon", "price": 59850.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M59e943df88027029341d4c6af2525bb4H0&pid=15.1" }, { "year": 2016, "id": 147, "horsepower": 355, "make": "gmc", "model": "yukon-xl", "price": 50865.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb508f2340b73c9f9068d419f7f0600d9H0&pid=15.1" }, { "year": 2016, "id": 148, "horsepower": 185, "make": "honda", "model": "accord", "price": 27380.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me49978f33bdde1258e774cdd2c3da1a2H0&pid=15.1" }, { "year": 2015, "id": 149, "horsepower": 196, "make": "honda", "model": "accord-hybrid", "price": 35055.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me49978f33bdde1258e774cdd2c3da1a2H0&pid=15.1" }, { "year": 2016, "id": 150, "horsepower": 185, "make": "honda", "model": "cr-v", "price": 28445.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M7d18b93c03e762ab07991de50d91d1bbo0&pid=15.1" }, { "year": 2016, "id": 151, "horsepower": 130, "make": "honda", "model": "cr-z", "price": 25090.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M0cb9f9a3ef569ce0f5514668d1fac21fo0&pid=15.1" }, { "year": 2015, "id": 152, "horsepower": 278, "make": "honda", "model": "crosstour", "price": 35940.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M67666c9771b841eb8c590ecf0f6b7793H0&pid=15.1" }, { "year": 2016, "id": 153, "horsepower": 130, "make": "honda", "model": "fit", "price": 18600.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M84b259e8f405363f3c05fd80404909d7H0&pid=15.1" }, { "year": 2016, "id": 154, "horsepower": 141, "make": "honda", "model": "hr-v", "price": 21265.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5b3880957755b15cd21716b5403e6a18H0&pid=15.1" }, { "year": 2016, "id": 155, "horsepower": 280, "make": "honda", "model": "pilot", "price": 31945.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M18bf40fdd1c4705731623d5904cc84faH0&pid=15.1" }, { "year": 2016, "id": 156, "horsepower": 137, "make": "hyundai", "model": "accent", "price": 16195.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M892cd1c6b3015bacdb097d97eae7c9a4H0&pid=15.1" }, { "year": 2016, "id": 157, "horsepower": 293, "make": "hyundai", "model": "azera", "price": 34100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M1faa055222e2133c503148944cc260c4H0&pid=15.1" }, { "year": 2017, "id": 158, "horsepower": 147, "make": "hyundai", "model": "elantra", "price": 22350.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M4a1ca9e79269014bec02d89e8899b611H0&pid=15.1" }, { "year": 2016, "id": 159, "horsepower": 173, "make": "hyundai", "model": "elantra-gt", "price": 19800.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M0dfb925d563f5172dbaa50c1b9327e9bo0&pid=15.1" }, { "year": 2016, "id": 160, "horsepower": 429, "make": "hyundai", "model": "equus", "price": 61500.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M9eebb9e506c7571264a65d0dbb8fb5d6H0&pid=15.1" }, { "year": 2016, "id": 161, "horsepower": 420, "make": "hyundai", "model": "genesis", "price": 53850.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M7e670d51e9c1f62e98a0ab2d0e0f2260H0&pid=15.1" }, { "year": 2016, "id": 162, "horsepower": 348, "make": "hyundai", "model": "genesis-coupe", "price": 28150.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M88dc2ea57d9429d6d67bd53dd7373374H0&pid=15.1" }, { "year": 2017, "id": 163, "horsepower": 290, "make": "hyundai", "model": "santa-fe", "price": 38700.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb359bceb8de9b95f4bb4242e2eecc470H0&pid=15.1" }, { "year": 2017, "id": 164, "horsepower": 265, "make": "hyundai", "model": "santa-fe-sport", "price": 36500.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mf542393a3c13218d5560c6b9ebe8c6b2H0&pid=15.1" }, { "year": 2016, "id": 165, "horsepower": 178, "make": "hyundai", "model": "sonata", "price": 23725.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me8db7d5145c75aedcd572782e856cd9cH0&pid=15.1" }, { "year": 2016, "id": 166, "horsepower": 193, "make": "hyundai", "model": "sonata-hybrid", "price": 30100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M4817216dcfc82cd61298e602caaf1096o0&pid=15.1" }, { "year": 2016, "id": 167, "horsepower": 202, "make": "hyundai", "model": "sonata-plug-in-hybrid", "price": 38600.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mbc7ab1670ab072f0d6da624edb6eaf2co0&pid=15.1" }, { "year": 2016, "id": 168, "horsepower": 175, "make": "hyundai", "model": "tucson", "price": 31300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M14ef440cad5361346e2a01331a206191H0&pid=15.1" }, { "year": 2016, "id": 169, "horsepower": 201, "make": "hyundai", "model": "veloster", "price": 22600.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M7bf61dd5211b301b352b0e633ee70a9dH0&pid=15.1" }, { "year": 2015, "id": 170, "horsepower": 328, "make": "infiniti", "model": "q40", "price": 35550.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M2e7dfb20dec04cd074710ea9b7304179H0&pid=15.1" }, { "year": 2016, "id": 171, "horsepower": 208, "make": "infiniti", "model": "q50", "price": 33950.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mbe6937d0e2c2fcec9071e7c8b7787505H0&pid=15.1" }, { "year": 2015, "id": 172, "horsepower": 325, "make": "infiniti", "model": "q60-convertible", "price": 48550.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M991a64cb9ae57a1c77799cb90330b5ffH0&pid=15.1" }, { "year": 2016, "id": 173, "horsepower": 330, "make": "infiniti", "model": "q70", "price": 49850.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5c9866c32e7baf32c3d077c35e1f160fH0&pid=15.1" }, { "year": 2016, "id": 174, "horsepower": 325, "make": "infiniti", "model": "qx50", "price": 35850.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf9ed06bc7da129e55804c3832d00a7d5H0&pid=15.1" }, { "year": 2016, "id": 175, "horsepower": 250, "make": "infiniti", "model": "qx60", "price": 52050.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M46adcb666f5958bd2c248aa423cda4caH0&pid=15.1" }, { "year": 2016, "id": 176, "horsepower": 325, "make": "infiniti", "model": "qx70", "price": 45850.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M3346b7c6635aed69a3d91efe26a377bcH0&pid=15.1" }, { "year": 2016, "id": 177, "horsepower": 400, "make": "infiniti", "model": "qx80", "price": 63250.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mb6b43cfbd6b76a5634d6b23834b86bf3o0&pid=15.1" }, { "year": 2017, "id": 178, "horsepower": 380, "make": "jaguar", "model": "f-pace", "price": 56700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf00d07325e9839ffc41e5c77d1c2f1feo0&pid=15.1" }, { "year": 2017, "id": 179, "horsepower": 340, "make": "jaguar", "model": "f-type", "price": 62700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M8f4e91fbea211824d1063d864e901701H0&pid=15.1" }, { "year": 2017, "id": 180, "horsepower": 340, "make": "jaguar", "model": "xe", "price": 44200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M1351531b533d2ac5a7ccb555bd3675f0H0&pid=15.1" }, { "year": 2017, "id": 181, "horsepower": 180, "make": "jaguar", "model": "xf", "price": 54200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M3b7b20a1bab7db53473b64e7b65f3571H0&pid=15.1" }, { "year": 2016, "id": 182, "horsepower": 340, "make": "jaguar", "model": "xj", "price": 74400.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mcc751a8c33eeefe6592698678723b04ao0&pid=15.1" }, { "year": 2015, "id": 183, "horsepower": 385, "make": "jaguar", "model": "xk", "price": 90500.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M801d316dc8b3bc208717a7eb634a7268H0&pid=15.1" }, { "year": 2016, "id": 184, "horsepower": 184, "make": "jeep", "model": "cherokee", "price": 27875.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mc076843bb16660cf2e1a0c2ddfe45f05H0&pid=15.1" }, { "year": 2016, "id": 185, "horsepower": 158, "make": "jeep", "model": "compass", "price": 19595.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md0b2b0e54f1b88e0e6954f1706cfb814H0&pid=15.1" }, { "year": 2016, "id": 186, "horsepower": 290, "make": "jeep", "model": "grand-cherokee", "price": 46690.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M006dabaffc5b010af5737859227aeaebo0&pid=15.1" }, { "year": 2016, "id": 187, "horsepower": 475, "make": "jeep", "model": "grand-cherokee-srt", "price": 65495.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M322cd192e9c1983f8cb154c9afdc1462H0&pid=15.1" }, { "year": 2016, "id": 188, "horsepower": 172, "make": "jeep", "model": "patriot", "price": 19595.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M27afb7fbdbe8f1cea205f8347b1ca482H0&pid=15.1" }, { "year": 2016, "id": 189, "horsepower": 160, "make": "jeep", "model": "renegade", "price": 21395.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M57750804d041f7d62d2c316a94f007b4o0&pid=15.1" }, { "year": 2016, "id": 190, "horsepower": 201, "make": "kia", "model": "forte", "price": 21690.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M61998d2975f53a21755a5ec57e6328afH0&pid=15.1" }, { "year": 2016, "id": 191, "horsepower": 311, "make": "kia", "model": "k900", "price": 54900.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mb2c7189e214f4b5f3508173bb16d3424o0&pid=15.1" }, { "year": 2016, "id": 192, "horsepower": 185, "make": "kia", "model": "optima", "price": 21990.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M69dab2aaf1d6df0360598426864528f3o0&pid=15.1" }, { "year": 2016, "id": 193, "horsepower": 199, "make": "kia", "model": "optima-hybrid", "price": 25995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M286839f23d62e530fdacd3da195237eeH0&pid=15.1" }, { "year": 2016, "id": 194, "horsepower": 138, "make": "kia", "model": "rio", "price": 14165.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M5a915ce592516c8b0e993e0463cab5b6H0&pid=15.1" }, { "year": 2016, "id": 195, "horsepower": 276, "make": "kia", "model": "sedona", "price": 32700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M6bfbf46c6f9496c44490453152651137H0&pid=15.1" }, { "year": 2016, "id": 196, "horsepower": 290, "make": "kia", "model": "sorento", "price": 43300.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M52096cba35c237900b40c07ed6abcdc1H0&pid=15.1" }, { "year": 2016, "id": 197, "horsepower": 164, "make": "kia", "model": "soul", "price": 19300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Ma6981883dccca80fb27a3c4793bd141fH0&pid=15.1" }, { "year": 2017, "id": 198, "horsepower": 181, "make": "kia", "model": "sportage", "price": 24490.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mfc6efbc0f505acb2380177731ad74726H0&pid=15.1" }, { "year": 2015, "id": 199, "horsepower": 720, "make": "lamborghini", "model": "aventador", "price": 548800.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6dc7f0ffca978cd1409bb2b2f923150aH0&pid=15.1" }, { "year": 2015, "id": 200, "horsepower": 610, "make": "lamborghini", "model": "huracan", "price": 237250.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M6af11cbad68dbdf333369e4e650db479o0&pid=15.1" }, { "year": 2016, "id": 201, "horsepower": 240, "make": "land-rover", "model": "discovery-sport", "price": 37455.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M74cf469a97fea7aae725be410558553co0&pid=15.1" }, { "year": 2015, "id": 202, "horsepower": 240, "make": "land-rover", "model": "lr2", "price": 41700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M9cc6224f3622c0debf8a163e38f6403bH0&pid=15.1" }, { "year": 2016, "id": 203, "horsepower": 340, "make": "land-rover", "model": "lr4", "price": 55300.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mbaa016cb3a596afe346da302a384d787H0&pid=15.1" }, { "year": 2016, "id": 204, "horsepower": 254, "make": "land-rover", "model": "range-rover", "price": 86450.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M600c0b0c9e9d2e64ca2bb7eef576a61bH0&pid=15.1" }, { "year": 2017, "id": 205, "horsepower": 240, "make": "land-rover", "model": "range-rover-evoque", "price": 50475.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M68dab6eae6dc77d3364be9e8a019a468H0&pid=15.1" }, { "year": 2016, "id": 206, "horsepower": 510, "make": "land-rover", "model": "range-rover-sport", "price": 93295.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mfca129eee712f2fa8e054347e495cdaao0&pid=15.1" }, { "year": 2016, "id": 207, "horsepower": 134, "make": "lexus", "model": "ct-200h", "price": 31250.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mff60dd65e22256cd43c007f866f73c79H0&pid=15.1" }, { "year": 2016, "id": 208, "horsepower": 200, "make": "lexus", "model": "es-300h", "price": 41020.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf0befc402daca53d9a32c9efc605286bH0&pid=15.1" }, { "year": 2016, "id": 209, "horsepower": 268, "make": "lexus", "model": "es-350", "price": 38100.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M64479fd12e857c54b917a49fb9aa7815H0&pid=15.1" }, { "year": 2016, "id": 210, "horsepower": 241, "make": "lexus", "model": "gs-200t", "price": 45615.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mc6c7176c0da86cc8cb3714ef70f68929o0&pid=15.1" }, { "year": 2016, "id": 211, "horsepower": 311, "make": "lexus", "model": "gs-350", "price": 50000.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mad17b20bdd41df227e16ab365b3ef6ado0&pid=15.1" }, { "year": 2016, "id": 212, "horsepower": 338, "make": "lexus", "model": "gs-450h", "price": 63080.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M80c905e382edac6f991d56ca97111a34o0&pid=15.1" }, { "year": 2016, "id": 213, "horsepower": 467, "make": "lexus", "model": "gs-f", "price": 84440.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M658775c20e748737ed2d426b39883496H0&pid=15.1" }, { "year": 2016, "id": 214, "horsepower": 301, "make": "lexus", "model": "gx-460", "price": 62155.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mdc081ec19c853e27b854cae0d6ab975dH0&pid=15.1" }, { "year": 2016, "id": 215, "horsepower": 241, "make": "lexus", "model": "is-200t", "price": 37325.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M0403c0ffd9de118fc8a0db79d5493b4fo0&pid=15.1" }, { "year": 2015, "id": 216, "horsepower": 204, "make": "lexus", "model": "is-250", "price": 43690.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Med2f330fb88938b5c10799e35f7e596dH0&pid=15.1" }, { "year": 2015, "id": 217, "horsepower": 204, "make": "lexus", "model": "is-250-c", "price": 43360.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5d08a112a75e60f2e54b6318adf14a2ao0&pid=15.1" }, { "year": 2016, "id": 218, "horsepower": 255, "make": "lexus", "model": "is-300", "price": 39700.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Med6b75540eb5aeb18868b539bb7b91f8H0&pid=15.1" }, { "year": 2016, "id": 219, "horsepower": 306, "make": "lexus", "model": "is-350", "price": 43035.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M30475054d256defc1aa57544fd9e0c49H0&pid=15.1" }, { "year": 2015, "id": 220, "horsepower": 306, "make": "lexus", "model": "is-350-c", "price": 47640.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M47c9f38446c11a938803e64c4978c815H0&pid=15.1" }, { "year": 2016, "id": 221, "horsepower": 360, "make": "lexus", "model": "ls-460", "price": 75465.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M78589bd3bf396b6e7efa848a5767d8ecH0&pid=15.1" }, { "year": 2016, "id": 222, "horsepower": 438, "make": "lexus", "model": "ls-600h-l", "price": 120440.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M521d258c28535dcc925528b9643f435fH0&pid=15.1" }, { "year": 2016, "id": 223, "horsepower": 383, "make": "lexus", "model": "lx-570", "price": 88880.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mc5144c15208f6b0a738c977f2360de55H0&pid=15.1" }, { "year": 2016, "id": 224, "horsepower": 235, "make": "lexus", "model": "nx-200t", "price": 34965.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M14a30ae6b13e74b8b94354d7b4d17f27o0&pid=15.1" }, { "year": 2016, "id": 225, "horsepower": 194, "make": "lexus", "model": "nx-300h", "price": 39720.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9d75a141474339a9c5bd7399e140e4d9o0&pid=15.1" }, { "year": 2016, "id": 226, "horsepower": 241, "make": "lexus", "model": "rc-200t", "price": 39995.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me5086a9ce846d0544dad9adba9399876o0&pid=15.1" }, { "year": 2016, "id": 227, "horsepower": 255, "make": "lexus", "model": "rc-300", "price": 42610.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0de226498bc865e3d370b6751be4b340o0&pid=15.1" }, { "year": 2016, "id": 228, "horsepower": 306, "make": "lexus", "model": "rc-350", "price": 42780.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M071b87654f3a1b3b9d7bb9af9c23d2f6o0&pid=15.1" }, { "year": 2016, "id": 229, "horsepower": 467, "make": "lexus", "model": "rc-f", "price": 62805.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5d4f38f5eb5a53da9af7bf6ae4e6d7f3H0&pid=15.1" }, { "year": 2016, "id": 230, "horsepower": 295, "make": "lexus", "model": "rx-350", "price": 41900.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M8fd8cd4951f4504ca3fc85a4c5945a79H0&pid=15.1" }, { "year": 2016, "id": 231, "horsepower": 308, "make": "lexus", "model": "rx-450h", "price": 52235.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md2f279c9cb9cb26b6bcfe23ad4f45600H0&pid=15.1" }, { "year": 2017, "id": 232, "horsepower": 240, "make": "lincoln", "model": "mkc", "price": 32720.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M68fc0bc98cc10342cf08677d72126518H0&pid=15.1" }, { "year": 2016, "id": 233, "horsepower": 350, "make": "lincoln", "model": "mks", "price": 39010.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md8bb12b10b23b4dd29b5cc3352dc8f76H0&pid=15.1" }, { "year": 2016, "id": 234, "horsepower": 365, "make": "lincoln", "model": "mkt", "price": 45365.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M48e536d380de3598da3c5931086e9076H0&pid=15.1" }, { "year": 2016, "id": 235, "horsepower": 303, "make": "lincoln", "model": "mkx", "price": 45315.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf36ddc3b183d052e0c65c324022adea5o0&pid=15.1" }, { "year": 2016, "id": 236, "horsepower": 365, "make": "lincoln", "model": "navigator", "price": 66770.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mec609603ebaa20b05c19e2bb17d6a821H0&pid=15.1" }, { "year": 2016, "id": 237, "horsepower": 134, "make": "mini", "model": "cooper", "price": 21700.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf6f012890cdac6d06713e0e8e99aba35o0&pid=15.1" }, { "year": 2016, "id": 238, "horsepower": 134, "make": "mini", "model": "cooper-clubman", "price": 24100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md952f5eef4f0d0ac1fa8d2ceda41999bH0&pid=15.1" }, { "year": 2016, "id": 239, "horsepower": 208, "make": "mini", "model": "cooper-countryman", "price": 35350.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Ma98a364671617f90ba8928a4daba8feeH0&pid=15.1" }, { "year": 2015, "id": 240, "horsepower": 121, "make": "mini", "model": "cooper-coupe", "price": 22000.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Me376149f1bf66be6a05d86c372b43682o0&pid=15.1" }, { "year": 2016, "id": 241, "horsepower": 121, "make": "mini", "model": "cooper-paceman", "price": 23550.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Md9b00e1ef0b2938407995c865be8c839H0&pid=15.1" }, { "year": 2015, "id": 242, "horsepower": 208, "make": "mini", "model": "cooper-roadster", "price": 36250.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M623a4b2c7b8850a69fa89a1616ae349bo0&pid=15.1" }, { "year": 2016, "id": 243, "horsepower": 345, "make": "maserati", "model": "ghibli", "price": 70600.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mb8f73cc3c0ffdb2820371bd6042c67ffH0&pid=15.1" }, { "year": 2016, "id": 244, "horsepower": 454, "make": "maserati", "model": "granturismo", "price": 165627.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9ab01ed56547fec4f98c5fa941dc309cH0&pid=15.1" }, { "year": 2016, "id": 245, "horsepower": 454, "make": "maserati", "model": "granturismo-convertible", "price": 182009.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mb88833ce84cf3dee23cd1b7039b06d32H0&pid=15.1" }, { "year": 2016, "id": 246, "horsepower": 523, "make": "maserati", "model": "quattroporte", "price": 141500.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3e252e71106cf8baeb24afd74b788337H0&pid=15.1" }, { "year": 2016, "id": 247, "horsepower": 155, "make": "mazda", "model": "3", "price": 19595.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M5fa5135857fb4d0fd97768dd278560b9H0&pid=15.1" }, { "year": 2015, "id": 248, "horsepower": 157, "make": "mazda", "model": "5", "price": 21240.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M9d96009d5ecf3f5c9e31857ab35708e9o0&pid=15.1" }, { "year": 2016, "id": 249, "horsepower": 184, "make": "mazda", "model": "6", "price": 21495.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mb66141115a58ad5cd7110f63777c57b5H0&pid=15.1" }, { "year": 2016, "id": 250, "horsepower": 146, "make": "mazda", "model": "cx-3", "price": 21210.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M075550f17304f8df61f8c28b441c2533H0&pid=15.1" }, { "year": 2016, "id": 251, "horsepower": 184, "make": "mazda", "model": "cx-5", "price": 25215.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Ma8b77b8c7fe8e05f28b4abe6d3aff60fH0&pid=15.1" }, { "year": 2016, "id": 252, "horsepower": 155, "make": "mazda", "model": "mx-5-miata", "price": 24915.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mfe2adb1dbdcd398bd9eae5b77475ff2ao0&pid=15.1" }, { "year": 2015, "id": 253, "horsepower": 641, "make": "mclaren", "model": "650s-coupe", "price": 265500.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mfb5b0b2e530a4e95192b3ce0549b2148o0&pid=15.1" }, { "year": 2015, "id": 254, "horsepower": 641, "make": "mclaren", "model": "650s-spider", "price": 280225.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M3e727a0901917692d56593b03cdf3e70H0&pid=15.1" }, { "year": 2016, "id": 255, "horsepower": 503, "make": "mercedes-benz", "model": "amg-gt", "price": 129900.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0d2f569fb864ebfce8e1b90b7153db3eH0&pid=15.1" }, { "year": 2016, "id": 256, "horsepower": 177, "make": "mercedes-benz", "model": "b-class-electric-drive", "price": 41450.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3ddc015061023c594b3d0140711cfbffo0&pid=15.1" }, { "year": 2016, "id": 257, "horsepower": 208, "make": "mercedes-benz", "model": "cla-class", "price": 34050.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M43c28acb61980d8ece3acaece6ee4551H0&pid=15.1" }, { "year": 2016, "id": 258, "horsepower": 577, "make": "mercedes-benz", "model": "cls-class", "price": 107800.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M6920a004cd2de5aef46cf541eb223a3cH0&pid=15.1" }, { "year": 2016, "id": 259, "horsepower": 416, "make": "mercedes-benz", "model": "g-class", "price": 119900.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me115a47516e6f4523387340966eb9b44o0&pid=15.1" }, { "year": 2016, "id": 260, "horsepower": 550, "make": "mercedes-benz", "model": "gl-class", "price": 119450.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mcba843c257af811ec547266bb28d5a06H0&pid=15.1" }, { "year": 2016, "id": 261, "horsepower": 208, "make": "mercedes-benz", "model": "gla-class", "price": 34500.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M51283b76ec6c684c31dc1fe9d6f7c4e5H0&pid=15.1" }, { "year": 2016, "id": 262, "horsepower": 241, "make": "mercedes-benz", "model": "glc-class", "price": 38950.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5a371fcbfb23b68f38572a460f3a17b1H0&pid=15.1" }, { "year": 2016, "id": 263, "horsepower": 302, "make": "mercedes-benz", "model": "gle-class", "price": 51100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M5e3d996bea117bdaf0f4def5698cf5c5o0&pid=15.1" }, { "year": 2016, "id": 264, "horsepower": 362, "make": "mercedes-benz", "model": "gle-class-coupe", "price": 65100.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mfcee0294586e51a228374c5ec415fbd6o0&pid=15.1" }, { "year": 2015, "id": 265, "horsepower": 200, "make": "mercedes-benz", "model": "glk-class", "price": 39400.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me2895eff0bd5ba8c78887ed3a03af7e7H0&pid=15.1" }, { "year": 2016, "id": 266, "horsepower": 523, "make": "mercedes-benz", "model": "maybach", "price": 189350.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5568400523a9fd80de7dd2f7c3f7515bH0&pid=15.1" }, { "year": 2016, "id": 267, "horsepower": 208, "make": "mercedes-benz", "model": "metris", "price": 32500.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M1c84a287d054ba0c146da04f8ec23271o0&pid=15.1" }, { "year": 2016, "id": 268, "horsepower": 329, "make": "mercedes-benz", "model": "sl-class", "price": 85050.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M37e879cf4819af28d70ac892ff4b0f5eH0&pid=15.1" }, { "year": 2016, "id": 269, "horsepower": 302, "make": "mercedes-benz", "model": "slk-class", "price": 59200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M684adf0e3e885ba416f180aab4c05540o0&pid=15.1" }, { "year": 2015, "id": 270, "horsepower": 583, "make": "mercedes-benz", "model": "sls-amg-gt-final-edition", "price": 228080.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M53eb85f95067bddbcb7c4b65059db5d5o0&pid=15.1" }, { "year": 2016, "id": 271, "horsepower": 161, "make": "mercedes-benz", "model": "sprinter", "price": 44000.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M7167d1a28dcd5602bf9d7dab159473e0H0&pid=15.1" }, { "year": 2016, "id": 272, "horsepower": 161, "make": "mercedes-benz", "model": "sprinter-worker", "price": 32495.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M6d5ccae77c5d9d86eae6d594c60b31bfo0&pid=15.1" }, { "year": 2016, "id": 273, "horsepower": 168, "make": "mitsubishi", "model": "lancer", "price": 22495.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Ma24081d60d206c5ebb87c2fca87605c2H0&pid=15.1" }, { "year": 2015, "id": 274, "horsepower": 303, "make": "mitsubishi", "model": "lancer-evolution", "price": 37995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M14ce267a7dfa709379d891b490d28c26H0&pid=15.1" }, { "year": 2017, "id": 275, "horsepower": 78, "make": "mitsubishi", "model": "mirage", "price": 16495.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0a57a9a3539b0b253889b00ad64d2a93H0&pid=15.1" }, { "year": 2017, "id": 276, "horsepower": 78, "make": "mitsubishi", "model": "mirage-g4", "price": 13995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M29970b4318bdbe8546b8a9361a8cc1c8o0&pid=15.1" }, { "year": 2016, "id": 277, "horsepower": 224, "make": "mitsubishi", "model": "outlander", "price": 30995.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M381827e4e79eb8306c2c81cdca6b49b2H0&pid=15.1" }, { "year": 2016, "id": 278, "horsepower": 148, "make": "mitsubishi", "model": "outlander-sport", "price": 20795.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M639ac5238cb7b443fcc77d29e66f8e5do0&pid=15.1" }, { "year": 2016, "id": 279, "horsepower": 66, "make": "mitsubishi", "model": "i-miev", "price": 22995.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mc7d321d9f5cbf944e3b84ab6c6afc0b7H0&pid=15.1" }, { "year": 2016, "id": 280, "horsepower": 350, "make": "nissan", "model": "370z", "price": 45490.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mef1d608dfdd7db4a15192eda249ac64dH0&pid=15.1" }, { "year": 2016, "id": 281, "horsepower": 270, "make": "nissan", "model": "altima", "price": 32690.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mb408f65c487defaf4b0ca670966994a6o0&pid=15.1" }, { "year": 2016, "id": 282, "horsepower": 261, "make": "nissan", "model": "frontier", "price": 32080.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6578d03244cc5f765e12891c0e59b220H0&pid=15.1" }, { "year": 2016, "id": 283, "horsepower": 600, "make": "nissan", "model": "gt-r", "price": 149990.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5745377b14bebe22a924b24682777321H0&pid=15.1" }, { "year": 2016, "id": 284, "horsepower": 188, "make": "nissan", "model": "juke", "price": 26940.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M98e0d230c279af86382bda2a984c99a2H0&pid=15.1" }, { "year": 2016, "id": 285, "horsepower": 300, "make": "nissan", "model": "maxima", "price": 39960.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M52ca99e4625ee8cf05fcbeb56b397d51H0&pid=15.1" }, { "year": 2016, "id": 286, "horsepower": 260, "make": "nissan", "model": "murano", "price": 31260.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mf15950cb07e5e9396e3771f5ffec968eH0&pid=15.1" }, { "year": 2016, "id": 287, "horsepower": 317, "make": "nissan", "model": "nv-cargo", "price": 30640.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mac22989b3c6d9be1997cd82beef9da48H0&pid=15.1" }, { "year": 2016, "id": 288, "horsepower": 317, "make": "nissan", "model": "nv-passenger", "price": 39810.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M79b7e74aec5c251e1552dc3f20cbaffeH0&pid=15.1" }, { "year": 2016, "id": 289, "horsepower": 131, "make": "nissan", "model": "nv200", "price": 20870.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9ef02faa6b0673f9dfa57f7ad5229129H0&pid=15.1" }, { "year": 2016, "id": 290, "horsepower": 260, "make": "nissan", "model": "pathfinder", "price": 36410.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Ma28860e1a528b2736ed1f2120cd257d1H0&pid=15.1" }, { "year": 2016, "id": 291, "horsepower": 260, "make": "nissan", "model": "quest", "price": 26580.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mbde83bf8da75382d02b4fd05ab676105H0&pid=15.1" }, { "year": 2016, "id": 292, "horsepower": 170, "make": "nissan", "model": "rogue", "price": 28690.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M2a0bcf5812e50d9854bc852a1b20bd33H0&pid=15.1" }, { "year": 2015, "id": 293, "horsepower": 170, "make": "nissan", "model": "rogue-select", "price": 21500.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M71551e2f2af259f30f56aea2047a2492o0&pid=15.1" }, { "year": 2016, "id": 294, "horsepower": 130, "make": "nissan", "model": "sentra", "price": 22170.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Md3ee7cafaf1aa4a800df084bf2455a19H0&pid=15.1" }, { "year": 2016, "id": 295, "horsepower": 310, "make": "nissan", "model": "titan-xd", "price": 43290.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M9231d2ef5244daf016bcf7fb85b36781o0&pid=15.1" }, { "year": 2016, "id": 296, "horsepower": 109, "make": "nissan", "model": "versa", "price": 11990.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M1f7835178ba198e12e146c211b4f098bH0&pid=15.1" }, { "year": 2016, "id": 297, "horsepower": 109, "make": "nissan", "model": "versa-note", "price": 17980.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M3f0588b3c20eaa17b63b1f9a0135e354H0&pid=15.1" }, { "year": 2015, "id": 298, "horsepower": 261, "make": "nissan", "model": "xterra", "price": 31640.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mc72033fa4a7242a0ae9ffb73b5e1aac9H0&pid=15.1" }, { "year": 2017, "id": 299, "horsepower": 350, "make": "porsche", "model": "718-boxster", "price": 68400.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M00bd012ecaaf4f5bed8a5fdeeac0a107o0&pid=15.1" }, { "year": 2017, "id": 300, "horsepower": 420, "make": "porsche", "model": "911", "price": 122600.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mf3cd97c7b3b0d4649e95b6cd9371f2f1H0&pid=15.1" }, { "year": 2015, "id": 301, "horsepower": 887, "make": "porsche", "model": "918-spyder", "price": 929000.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mfbe2741d321033f4cea35e7f1ed700eaH0&pid=15.1" }, { "year": 2016, "id": 302, "horsepower": 375, "make": "porsche", "model": "boxster", "price": 82100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mfab77bb645cd0eb880876e527cde0200H0&pid=15.1" }, { "year": 2016, "id": 303, "horsepower": 570, "make": "porsche", "model": "cayenne", "price": 157300.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M1a13079d23fc43124e235a0eba8165c2H0&pid=15.1" }, { "year": 2016, "id": 304, "horsepower": 340, "make": "porsche", "model": "cayman", "price": 75200.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M283b0de8adeeb4761be8f4f3ed154f8cH0&pid=15.1" }, { "year": 2017, "id": 305, "horsepower": 340, "make": "porsche", "model": "macan", "price": 54400.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0fdd6ea61065a06288a0324dc9dbbf8aH0&pid=15.1" }, { "year": 2016, "id": 306, "horsepower": 520, "make": "porsche", "model": "panamera", "price": 141300.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mac3d70d07611e2c01596bb52b938571cH0&pid=15.1" }, { "year": 2016, "id": 307, "horsepower": 395, "make": "ram", "model": "1500", "price": 45430.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M5096d864e63199e13b15da2edc1ef1edH0&pid=15.1" }, { "year": 2016, "id": 308, "horsepower": 383, "make": "ram", "model": "3500", "price": 32285.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M49b8dca31d53b5a374a8b0c07820ade1H0&pid=15.1" }, { "year": 2015, "id": 309, "horsepower": 283, "make": "ram", "model": "cv-tradesman", "price": 22500.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf3f02a2adca41ff0384b804a3793a17bH0&pid=15.1" }, { "year": 2016, "id": 310, "horsepower": 280, "make": "ram", "model": "promaster-cargo-van", "price": 30630.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M101f12246b7010f243ec9e4b8f9cb9c0o0&pid=15.1" }, { "year": 2016, "id": 311, "horsepower": 178, "make": "ram", "model": "promaster-city", "price": 23445.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Ma577e1eac339aad905656f86a0f1afa3o0&pid=15.1" }, { "year": 2016, "id": 312, "horsepower": 280, "make": "ram", "model": "promaster-window-van", "price": 34150.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6dd4fcdd89ecd4c9802183d566f11475H0&pid=15.1" }, { "year": 2016, "id": 313, "horsepower": 563, "make": "rolls-royce", "model": "dawn", "price": 335000.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M460a77c93683d202ea3e259313eded2co0&pid=15.1" }, { "year": 2016, "id": 314, "horsepower": 563, "make": "rolls-royce", "model": "ghost-series-ii", "price": 295850.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mf6106fcfc843f86dc43aad322c6d567eH0&pid=15.1" }, { "year": 2016, "id": 315, "horsepower": 453, "make": "rolls-royce", "model": "phantom", "price": 492425.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M394e87266aea89ff47bc223864a95b7dH0&pid=15.1" }, { "year": 2016, "id": 316, "horsepower": 453, "make": "rolls-royce", "model": "phantom-coupe", "price": 449525.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M0d8aad5aefcac53aef1488270df1671co0&pid=15.1" }, { "year": 2016, "id": 317, "horsepower": 453, "make": "rolls-royce", "model": "phantom-drophead-coupe", "price": 492000.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mfb892e0f3ee610b834d5d2f21dcd2677o0&pid=15.1" }, { "year": 2016, "id": 318, "horsepower": 624, "make": "rolls-royce", "model": "wraith", "price": 304350.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mdff7a2c9b74aa96cfff7d4a5d358cba8H0&pid=15.1" }, { "year": 2016, "id": 319, "horsepower": 200, "make": "scion", "model": "fr-s", "price": 30610.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M957b42ff37419cf69d0c1969a3fc65feH0&pid=15.1" }, { "year": 2016, "id": 320, "horsepower": 106, "make": "scion", "model": "ia", "price": 15700.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Mc9e0dff1d2b2d30d957302c343bc679bo0&pid=15.1" }, { "year": 2016, "id": 321, "horsepower": 137, "make": "scion", "model": "im", "price": 19200.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M31a65dc7792a415518a4b78278d772fdo0&pid=15.1" }, { "year": 2015, "id": 322, "horsepower": 94, "make": "scion", "model": "iq", "price": 15665.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M82fbddb409265e382f06d15da09aba7aH0&pid=15.1" }, { "year": 2016, "id": 323, "horsepower": 179, "make": "scion", "model": "tc", "price": 20535.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mbb549c4b65c4ca3ce6ab6a40bf668dfaH0&pid=15.1" }, { "year": 2015, "id": 324, "horsepower": 158, "make": "scion", "model": "xb", "price": 19685.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M06b37d3393a5c6ed7d84455f19a3a723H0&pid=15.1" }, { "year": 2016, "id": 325, "horsepower": 200, "make": "subaru", "model": "brz", "price": 25395.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M8a03916896ba3d500d93ac13884a47daH0&pid=15.1" }, { "year": 2016, "id": 326, "horsepower": 160, "make": "subaru", "model": "crosstrek", "price": 26395.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3e2c8c02b8cf8079f8065e0661b9f101o0&pid=15.1" }, { "year": 2016, "id": 327, "horsepower": 170, "make": "subaru", "model": "forester", "price": 25295.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M684cea00760b6f65944f72312ea175bbH0&pid=15.1" }, { "year": 2016, "id": 328, "horsepower": 175, "make": "subaru", "model": "legacy", "price": 21745.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M8f03b45dc641d84aa19fb5c925adc4e9H0&pid=15.1" }, { "year": 2016, "id": 329, "horsepower": 175, "make": "subaru", "model": "outback", "price": 25295.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M337a3d0561a191d0c2efb1a5833001b1H0&pid=15.1" }, { "year": 2016, "id": 330, "horsepower": 305, "make": "subaru", "model": "wrx", "price": 39995.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Mee62ef15cdf946fd376c47334e0d87afH0&pid=15.1" }, { "year": 2015, "id": 331, "horsepower": 160, "make": "subaru", "model": "xv-crosstrek", "price": 25995.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Mf95d33130050e204af48bfeef964b03dH0&pid=15.1" }, { "year": 2016, "id": 332, "horsepower": 270, "make": "toyota", "model": "4runner", "price": 41850.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M481ca42c3cca9f8bd51b7cff2182d2caH0&pid=15.1" }, { "year": 2016, "id": 333, "horsepower": 268, "make": "toyota", "model": "avalon", "price": 35850.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M60c2e2da01b41a3077ef2e4208d6d375H0&pid=15.1" }, { "year": 2016, "id": 334, "horsepower": 200, "make": "toyota", "model": "avalon-hybrid", "price": 38100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9dde9ae03eefd05b4d2aea8c7c5c5cedH0&pid=15.1" }, { "year": 2016, "id": 335, "horsepower": 178, "make": "toyota", "model": "camry", "price": 23840.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mbc3d6505061478957cc04ee62f03abdcH0&pid=15.1" }, { "year": 2016, "id": 336, "horsepower": 200, "make": "toyota", "model": "camry-hybrid", "price": 30140.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Me05ab11457d027616554c346e5af3d90H0&pid=15.1" }, { "year": 2016, "id": 337, "horsepower": 132, "make": "toyota", "model": "corolla", "price": 20065.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M7809ab13629bcebb1c00a67e2e7ddc12H0&pid=15.1" }, { "year": 2016, "id": 338, "horsepower": 280, "make": "toyota", "model": "highlander-hybrid", "price": 50485.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M8e592895c7305a83d1bfc450e8e08767H0&pid=15.1" }, { "year": 2016, "id": 339, "horsepower": 381, "make": "toyota", "model": "land-cruiser", "price": 83825.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M1ca068b39ac99edf2009481218ce46d2o0&pid=15.1" }, { "year": 2016, "id": 340, "horsepower": 153, "make": "toyota", "model": "mirai", "price": 57500.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M8ae5b33aa71ae03251ded056042b11a0o0&pid=15.1" }, { "year": 2016, "id": 341, "horsepower": 121, "make": "toyota", "model": "prius", "price": 28650.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M1c4dbe332499e66608c031f00134548fH0&pid=15.1" }, { "year": 2015, "id": 342, "horsepower": 134, "make": "toyota", "model": "prius-plug-in", "price": 34905.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M669e676c568b5f86bd120337cee07578o0&pid=15.1" }, { "year": 2016, "id": 343, "horsepower": 99, "make": "toyota", "model": "prius-c", "price": 19560.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M2c0a3ae9911aeff4de38207bd372d33fH0&pid=15.1" }, { "year": 2016, "id": 344, "horsepower": 134, "make": "toyota", "model": "prius-v", "price": 28060.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M3a1fbf9b87e1ffa1b2b52dc6e9ea155fH0&pid=15.1" }, { "year": 2016, "id": 345, "horsepower": 176, "make": "toyota", "model": "rav4", "price": 29265.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M752a070f2edbecbda83e1c89665ed638H0&pid=15.1" }, { "year": 2016, "id": 346, "horsepower": 194, "make": "toyota", "model": "rav4-hybrid", "price": 28370.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.Md2ece932e257197add06ab36e439f191o0&pid=15.1" }, { "year": 2016, "id": 347, "horsepower": 381, "make": "toyota", "model": "sequoia", "price": 57340.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M742ad88973b69c076b536a5f7a09a075H0&pid=15.1" }, { "year": 2016, "id": 348, "horsepower": 266, "make": "toyota", "model": "sienna", "price": 37620.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M6329127fc1c60e4d3525e69d49705b21H0&pid=15.1" }, { "year": 2016, "id": 349, "horsepower": 159, "make": "toyota", "model": "tacoma", "price": 28460.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M0e4268e6f032cd3aecc9dc3abaf6191do0&pid=15.1" }, { "year": 2016, "id": 350, "horsepower": 381, "make": "toyota", "model": "tundra", "price": 46530.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Maf1323fa5f716d8f13bed115d684f7b2H0&pid=15.1" }, { "year": 2015, "id": 351, "horsepower": 181, "make": "toyota", "model": "venza", "price": 33560.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M612e6fad1adb2ad7b5524207f9726b5aH0&pid=15.1" }, { "year": 2016, "id": 352, "horsepower": 106, "make": "toyota", "model": "yaris", "price": 16930.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.Mfb9e12da7f9348df726db9dfe0277b47H0&pid=15.1" }, { "year": 2016, "id": 353, "horsepower": 210, "make": "volkswagen", "model": "beetle", "price": 27095.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.Ma6189f14283198e1a971ce7b041e3218H0&pid=15.1" }, { "year": 2016, "id": 354, "horsepower": 210, "make": "volkswagen", "model": "beetle-convertible", "price": 29790.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M54e0f592ebabe94388d55a3e924b1690H0&pid=15.1" }, { "year": 2016, "id": 355, "horsepower": 200, "make": "volkswagen", "model": "cc", "price": 34475.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M4fe2b419148fb35affdb0eae064a1892o0&pid=15.1" }, { "year": 2016, "id": 356, "horsepower": 200, "make": "volkswagen", "model": "eos", "price": 31995.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Me739bde7c14b2a358e5ea49515af0c06H0&pid=15.1" }, { "year": 2016, "id": 357, "horsepower": 170, "make": "volkswagen", "model": "golf", "price": 18495.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M6fdd1c1864fc71003ca94aa46b3e7124H0&pid=15.1" }, { "year": 2016, "id": 358, "horsepower": 210, "make": "volkswagen", "model": "golf-gti", "price": 29125.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M9cc6d420ab965f974fd845b25435c5a6H0&pid=15.1" }, { "year": 2016, "id": 359, "horsepower": 292, "make": "volkswagen", "model": "golf-r", "price": 38995.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M0151237f77f817b440321d7eb80eefebH0&pid=15.1" }, { "year": 2016, "id": 360, "horsepower": 170, "make": "volkswagen", "model": "golf-sportwagen", "price": 27025.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M9ec4b2e99cb1371b9a87f8ccdc312e8fH0&pid=15.1" }, { "year": 2016, "id": 361, "horsepower": 210, "make": "volkswagen", "model": "jetta", "price": 28020.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M3498c3b3dc63da8268e568e35084a190o0&pid=15.1" }, { "year": 2016, "id": 362, "horsepower": 170, "make": "volkswagen", "model": "passat", "price": 22440.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M4fe2b419148fb35affdb0eae064a1892o0&pid=15.1" }, { "year": 2016, "id": 363, "horsepower": 280, "make": "volkswagen", "model": "touareg", "price": 42705.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M3ec16cd607bdfabb942f75d5821d2271o0&pid=15.1" }, { "year": 2016, "id": 364, "horsepower": 115, "make": "volkswagen", "model": "e-golf", "price": 28995.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M3f8216b5f1af483199e2a3c1e7722a42o0&pid=15.1" }, { "year": 2016, "id": 365, "horsepower": 302, "make": "volvo", "model": "s60", "price": 39450.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M61d12249ddd304bd2fe51b9f8be5ffe6H0&pid=15.1" }, { "year": 2016, "id": 366, "horsepower": 240, "make": "volvo", "model": "s80", "price": 48375.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M8ca93a37d82d8f0b2bf7a6555d188f6eH0&pid=15.1" }, { "year": 2016, "id": 367, "horsepower": 240, "make": "volvo", "model": "v60", "price": 36150.0, "img_url": "http://ts2.mm.bing.net/th?id=OIP.M19daf652040bcde16633447ee08ec152H0&pid=15.1" }, { "year": 2016, "id": 368, "horsepower": 250, "make": "volvo", "model": "v60-cross-country", "price": 41200.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M2f8ccb6f724f334180a426c8438de14co0&pid=15.1" }, { "year": 2016, "id": 369, "horsepower": 325, "make": "volvo", "model": "xc60", "price": 46950.0, "img_url": "http://ts3.mm.bing.net/th?id=OIP.M5baa0e196f8fbbadacfee38af9e27aafH0&pid=15.1" }, { "year": 2016, "id": 370, "horsepower": 240, "make": "volvo", "model": "xc70", "price": 41550.0, "img_url": "http://ts4.mm.bing.net/th?id=OIP.M27c0369789d75af1c3b4a25bc3778e8eH0&pid=15.1" }, { "year": 2016, "id": 371, "horsepower": 400, "make": "volvo", "model": "xc90", "price": 68100.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.Md9322192f9915642fb8a38f519a15115H0&pid=15.1" }]
}
