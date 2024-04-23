import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, map, pairwise, startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private _breadcrumbsSubject: BehaviorSubject<{ label: string; url: string }[]> = new BehaviorSubject<{ label: string; url: string }[]>([]);
  readonly breadcrumbs$ = this._breadcrumbsSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd || event instanceof RoutesRecognized),
        map(() => this.route),
        pairwise(),
        startWith([null, this.route]),
        map(([prevRoute, currRoute]) => this.buildBreadcrumbs(currRoute, prevRoute))
      )
      .subscribe(breadcrumbs => {
        this._breadcrumbsSubject.next(breadcrumbs);
      });
  }

  private buildBreadcrumbs(currRoute: ActivatedRoute | null, prevRoute: ActivatedRoute | null, url: string = '', breadcrumbs: { label: string; url: string }[] = []): { label: string; url: string }[] {
    if (!currRoute) {
      return breadcrumbs;
    }
  
    const routeConfig = currRoute.routeConfig;
    const label = routeConfig && routeConfig.data ? routeConfig.data['breadcrumb'] || '' : '';
    const path = routeConfig && routeConfig.path ? routeConfig.path : '';
  
    const nextUrl = `${url}/${path}`;
    const breadcrumb: { label: string; url: string } = { label, url: nextUrl };
  
    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
  
    if (currRoute.firstChild && currRoute.firstChild !== prevRoute) {
      // If there is a child route and it's different from the previous route, recursively call buildBreadcrumbs with the child route
      return this.buildBreadcrumbs(currRoute.firstChild, currRoute, nextUrl, newBreadcrumbs);
    } else {
      // If there are no child routes or current route hasn't changed, return the breadcrumbs array
      return newBreadcrumbs;
    }
  }
  
  
  
}
