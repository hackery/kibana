/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ScopedSavedObjectsClientProvider } from './lib';
import { SavedObjectsClient } from './saved_objects_client';

/**
 * @public
 */
export interface SavedObjectsService<Request = any> {
  // ATTENTION: these types are incomplete
  addScopedSavedObjectsClientWrapperFactory: ScopedSavedObjectsClientProvider<
    Request
  >['addClientWrapperFactory'];
  getScopedSavedObjectsClient: ScopedSavedObjectsClientProvider<Request>['getClient'];
  SavedObjectsClient: typeof SavedObjectsClient;
  types: string[];
  getSavedObjectsRepository(...rest: any[]): any;
}

export {
  SavedObjectsRepository,
  ScopedSavedObjectsClientProvider,
  SavedObjectsClientWrapperFactory,
  SavedObjectsClientWrapperOptions,
  SavedObjectsErrorHelpers,
} from './lib';

export * from './saved_objects_client';