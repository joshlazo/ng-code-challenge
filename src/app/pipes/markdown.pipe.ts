import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { renderMarkdown } from 'src/utils/string';

@Pipe({
    name: 'markdown',
    standalone: true,
})
export class MarkdownPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(value: string, ...args: unknown[]): unknown {
        if (!value)
            return 'No profile listed';

        const htmlContent = renderMarkdown(value);

        return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
    }
}
