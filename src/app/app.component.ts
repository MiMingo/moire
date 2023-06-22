import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { GraphService } from "./graph/graph.service";
import { OverlayComponent } from "./overlay/overlay/overlay.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, OverlayComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild("bg") background!: ElementRef<HTMLCanvasElement>;

  constructor(private grapher: GraphService) {}

  public ngAfterViewInit(): void {
    this.background.nativeElement.width = window.innerWidth;
    this.background.nativeElement.height = window.innerHeight;

    // for (let i = -200; i < 200; i += 1) {
    //   let fx = (x: number) => (0.05 * x + 0.5 * i) ** 3 - 500;
    //   this.grapher.plotFunction(this.background.nativeElement, fx);
    // }

    for (let i = -200; i < 200; i += 1) {
      let fx = (x: number) => 0.1 * x + 8 * i;
      this.grapher.plotFunction(this.background.nativeElement, fx);
    }
  }
}
