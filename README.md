# Agora SDK Implementation with Ionic

# Find angular version https://github.com/dilipwk/angular-agora-video-call


This is a sample app for agora sdk implementation with Ionic


## Prerequisites
Before using the Library, you need to:

1. Get a valid Agora account. ([Sign up](https://sso.agora.io/en/signup) for free.)
2. Create a project in [Agora Console](https://console.agora.io/) and choose **APP ID** for authentication.


## Demo 
https://drive.google.com/file/d/1Qw3tLT_CQVSbedSOkdJukmFrmrcpzcTg/view?usp=sharing

## Setup 
<strong><pre>git clone https://github.com/dilipwk/ionic-agora-video-call</pre></strong>
<strong><pre> cd ionic-agora-video-call </pre></strong>
<strong><pre> npm i </pre></strong>
<strong><pre>npm i ngx-agora-sdk-ng --save </pre></strong>
<strong><pre>ionic serve</pre></strong>
 
* Replace your own app Id in `agora-appId`. in app-routing.module
```ts
import { NgxAgoraSdkNgModule } from 'ngx-agora-sdk-ng';

imports: [
    NgxAgoraSdkNgModule.forRoot({
      AppID: 'replace-agora-appId',
      Video: { codec: 'h264', mode: 'rtc', role: 'host' }
    }),
  ],
export class AppRoutingModule { }
```

## Android Build
<strong><pre> ionic cordova platform add android </pre></strong>
<strong><pre> cordova plugin add cordova-clipboard </pre></strong>
* Open AndroidManifest.xml in ionic-agora-video-call/platforms/android/app/src/main/AndroidManifest.xml 
Add following 
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
<strong><pre> ionic cordova build android </pre></strong>

------------
Made with ❤️

Email dilipwk@hasotech.com for any development related support.

Allude https://github.com/ChapterII/ngx-agora-sdk-ng


Thanks