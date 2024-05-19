// custom.d.ts
interface SpeechRecognition extends EventTarget {
    new (): SpeechRecognition;
    lang: string;
    interimResults: boolean;
    maxAlternatives: number;
    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    abort(): void;
    start(): void;
    stop(): void;
  }
  
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }
  
  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly [index: number]: SpeechRecognitionAlternative;
    readonly length: number;
  }
  
  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
  
  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  
  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
  }
  
  declare global {
    interface Window {
      SpeechRecognition: typeof SpeechRecognition;
      webkitSpeechRecognition: typeof SpeechRecognition;
    }
  }
  