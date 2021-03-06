import 'rxjs/add/operator/toPromise';
import {ResponseModel} from '../models/response.model';

export abstract class GeneralAPIServiceBase<T> {
    public abstract getResponseModel(current_page: number,
                                     transaction_count_per_page: number,
                                     query_parameters: Map<string, string>,
                                     tag: string,
                                     sort_by: string,
                                     descending: boolean): Promise<ResponseModel<T[]>>;
}
