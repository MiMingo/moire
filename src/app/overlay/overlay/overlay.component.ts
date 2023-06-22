import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GraphService } from "src/app/graph/graph.service";
import { DragDropModule } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-overlay",
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.scss"],
})
export class OverlayComponent implements AfterViewInit {
  @ViewChild("overlay") overlay!: ElementRef<HTMLCanvasElement>;

  constructor(private graphService: GraphService) {}

  ngAfterViewInit() {
    this.overlay.nativeElement.width = window.innerWidth / 2;
    this.overlay.nativeElement.height = window.innerHeight / 2;

    for (let i = -50; i < 50; i++) {
      this.graphService.plotFunction(
        this.overlay.nativeElement,
        (x) => i * 10,
        {
          step: 100,
          color: "rgba(0,0,0,0.90)",
          strokeWidth: 7,
        }
      );
    }
  }
}
