import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAgoraSdkNgModule } from 'ngx-agora-sdk-ng';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MeetingPreviewComponent } from './pages/meeting-preview/meeting-preview.component';
import {
  RoundTranparentIconButtonComponent
} from './shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component';
import { InputOutputSettingsComponent } from './shared/components/input-output-settings/input-output-settings.component';
import { SoundMeterComponent } from './shared/components/sound-meter/sound-meter.component';
import { CameraPreviewComponent } from './shared/components/camera-preview/camera-preview.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MeetingPageComponent } from './pages/meeting-page/meeting-page.component';
import { AgoraVideoPlayerDirective } from './shared/directives/agora-video-player.directive';
import { MeetingControlsComponent } from './shared/components/meeting-controls/meeting-controls.component';
import { MeetingParticipantComponent } from './shared/components/meeting-participant/meeting-participant.component';
import { MeetingParticipantControlsComponent } from './shared/components/meeting-participant-controls/meeting-participant-controls.component';
import { SoundVisualizerComponent } from './shared/components/sound-visualizer/sound-visualizer.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'preview', component: MeetingPreviewComponent },
  { path: 'settings', component: InputOutputSettingsComponent },
  { path: 'meeting', component: MeetingPageComponent}

];
@NgModule({
  declarations: [
    MeetingPreviewComponent,
    RoundTranparentIconButtonComponent,
    InputOutputSettingsComponent,
    SoundMeterComponent,
    CameraPreviewComponent,
    WelcomeComponent,
    MeetingPageComponent,
    AgoraVideoPlayerDirective,
    MeetingControlsComponent,
    MeetingParticipantComponent,
    MeetingParticipantControlsComponent,
    SoundVisualizerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxAgoraSdkNgModule.forRoot({
      AppID: 'replace-agora-appId',
      Video: { codec: 'h264', mode: 'rtc', role: 'host' }
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
