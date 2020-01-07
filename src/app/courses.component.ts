import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
            {{text | summary:20}}
            `
})
export class CoursesComponent  {
text = `A general rule of thumb is to begin with a topic sentence; develop that topic well with evidence, examples, and explanations; and conclude the paragraph appropriately.`;
  }