import { Component } from "@angular/core";
import { ComponentSelectors } from "../../component-selectors";
import { DynamicComponentsService } from "../../dynamic-components.service";

@Component({
  selector: "my-d2",
  template: `
    <div class="lazy-component">
      <ng-container *ngIf="loading">
        <img src="assets/loading.gif" class="loadingImage" />
      </ng-container>
      {{ content }}
    </div>
  `,
  styleUrls: ["../../lazy.component.css", "./d.component.css"]
})
export class D2Component {
  loading: boolean = true;
  content: string;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.content = "D2";
      //uncomment this next line to see this component dynamically reload
      //this.content = 'D1'
    }, 3000);
  }
}
