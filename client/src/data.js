export const tagOptions = [
  { value: 'abtesting', label: 'abtesting' },
  { value: 'alpha', label: 'alpha' },
  { value: 'analysis', label: 'analysis' },
  { value: 'api', label: 'api' },
  { value: 'application', label: 'application' },
  { value: 'architecture', label: 'architecture' },
  { value: 'backend', label: 'backend' },
  { value: 'beta', label: 'beta' },
  { value: 'blocked', label: 'blocked' },
  { value: 'browser', label: 'browser' },
  { value: 'bug', label: 'bug' },
  { value: 'bugfix', label: 'bugfix' },
  { value: 'cache', label: 'cache' },
  { value: 'cicd', label: 'cicd' },
  { value: 'cloud', label: 'cloud' },
  { value: 'cms', label: 'cms' },
  { value: 'crm', label: 'crm' },
  { value: 'css', label: 'css' },
  { value: 'cta', label: 'cta' },
  { value: 'database', label: 'database' },
  { value: 'deploy', label: 'deploy' },
  { value: 'design', label: 'design' },
  { value: 'devops', label: 'devops' },
  { value: 'domain', label: 'domain' },
  { value: 'feature', label: 'feature' },
  { value: 'feedback', label: 'feedback' },
  { value: 'fix', label: 'fix' },
  { value: 'framework', label: 'framework' },
  { value: 'frontend', label: 'frontend' },
  { value: 'fullstack', label: 'fullstack' },
  { value: 'growth', label: 'growth' },
  { value: 'hotfix', label: 'hotfix' },
  { value: 'html', label: 'html' },
  { value: 'implementation', label: 'implmentation' },
  { value: 'integration', label: 'integration' },
  { value: 'interface', label: 'interface' },
  { value: 'javascript', label: 'javascript' },
  { value: 'loadtest', label: 'loadtest' },
  { value: 'localization', label: 'localization' },
  { value: 'material', label: 'material' },
  { value: 'metric', label: 'metric' },
  { value: 'mobile', label: 'mobile' },
  { value: 'mockup', label: 'mockup' },
  { value: 'monitoring', label: 'monitoring' },
  { value: 'navigation', label: 'navigation' },
  { value: 'optimization', label: 'optimization' },
  { value: 'organization', label: 'organization' },
  { value: 'patch', label: 'patch' },
  { value: 'performance', label: 'performance' },
  { value: 'platform', label: 'platform' },
  { value: 'plugin', label: 'plugin' },
  { value: 'portal', label: 'portal' },
  { value: 'production', label: 'production' },
  { value: 'react', label: 'react' },
  { value: 'refactor', label: 'refactor' },
  { value: 'route', label: 'route' },
  { value: 'seed', label: 'seed' },
  { value: 'seo', label: 'seo' },
  { value: 'server', label: 'server' },
  { value: 'service', label: 'service' },
  { value: 'simulation', label: 'simulation' },
  { value: 'syles', label: 'syles' },
  { value: 'system', label: 'system' },
  { value: 'task', label: 'task' },
  { value: 'testing', label: 'testing' },
  { value: 'ui', label: 'ui' },
  { value: 'unittest', label: 'unittest' },
  { value: 'update', label: 'update' },
  { value: 'user', label: 'user' },
  { value: 'ux', label: 'ux' },
  { value: 'vm', label: 'vm' },
  { value: 'wireframe', label: 'wireframe' },
  { value: 'wish', label: 'wish' },
];

export const progressOptions = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 1,
    label: 'Planned',
  },
  {
    value: 2,
    label: 'In Progress',
  },
  {
    value: 3,
    label: 'Blocked',
  },
  {
    value: 4,
    label: 'Completed',
  },
];

export const priorityOptions = [
  {
    value: 0,
    label: 'None',
  },
  {
    value: 1,
    label: 'Wish',
  },
  {
    value: 2,
    label: 'Low',
  },
  {
    value: 3,
    label: 'Medium',
  },
  {
    value: 4,
    label: 'High',
  },
];

export const exampleTasks = [
  {
    id: 'e29f01ce-ca0e-4ab1-8703-7ef078fe870a',
    starred: true,
    title: 'Example Task One',
    content: `<p>Here is an example</p>
    <p>We should have the app separated by authenticated and non-authenticated</p>
    <ol>
    <li>Create Auth and Unauth components</li>
    <li>useContext to set as a provider to determine if user is authenticated/logged in</li>
    <li>From top level in App.js, display authenticated or not based on this data</li>
    </ol>
    <p><strong>Once done, we can display either one with just a simple click for MVP</strong></p>
    <p>Let's add some tags and we will separate them by commas for MVP</p>`,
    progress: 2,
    priority: 3,
    startDate: 1562796120000,
    targetDate: 1564610520000,
    startDateUnix: 1562796120000,
    targetDateUnix: 1564610520000,
    tags: 'dev,example,mvp',
  },
  {
    id: 'b4c1e3d5-cc33-4d36-a045-d87dfebc4602',
    starred: false,
    title: 'Example Task two',
    content: `<p style="text-align: center;">here is some fake content to task 2</p>
    <p style="text-align: center;">lets center it</p>
    <p style="text-align: center;"><em>COOL THING</em></p>`,
    progress: 0,
    priority: 2,
    startDate: 1562796120000,
    targetDate: 1573686120000,
    startDateUnix: 1562796120000,
    targetDateUnix: 1573686120000,
    tags: 'serverless,dynamodb,fake,seed',
  },
  {
    id: 'f9277ef1-1e19-4d15-bc92-232c42935ade',
    starred: true,
    title: 'Seperate authenticated and unathenticated three',
    content: `<table style="border-collapse: collapse; width: 100%;" border="1">
    <tbody>
    <tr>
    <td style="width: 33.3333%;">here</td>
    <td style="width: 33.3333%;">is</td>
    <td style="width: 33.3333%;">a</td>
    </tr>
    <tr>
    <td style="width: 33.3333%;">three</td>
    <td style="width: 33.3333%;">by</td>
    <td style="width: 33.3333%;">four</td>
    </tr>
    <tr>
    <td style="width: 33.3333%;">table</td>
    <td style="width: 33.3333%;">inside</td>
    <td style="width: 33.3333%;">a</td>
    </tr>
    <tr>
    <td style="width: 33.3333%;">html</td>
    <td style="width: 33.3333%;">note</td>
    <td style="width: 33.3333%;">wow</td>
    </tr>
    </tbody>
    </table>`,
    progress: 1,
    priority: 4,
    startDate: 1562796120000,
    targetDate: 1566338520000,
    startDateUnix: 1562796120000,
    targetDateUnix: 1566338520000,
    tags: 'authenticated,unathenticated,context',
  },
  {
    id: '74e0de93-2120-4e49-9b56-dccd9e21a642',
    starred: false,
    title: 'Reach router for App four',
    content: `<p style="text-align: right;">reach router task should be done soon</p>
    <p style="text-align: right;">please</p>
    <p style="text-align: right;">ok</p>`,
    progress: 2,
    priority: 4,
    startDate: 1563487320000,
    targetDate: 1565388120000,
    startDateUnix: 1563487320000,
    targetDateUnix: 1565388120000,
    tags: 'react,router,reach',
  },
  {
    id: 'ab5fcff0-d9b1-4338-9659-266f31302cce',
    starred: false,
    title: 'Get Authentication to work five',
    content: `<ol>
    <li>we need auth to work as well</li>
    <li>maybe just a storage item for now</li>
    <li>we also need to stop rendering each time</li>
    <li>the editor changes</li>
    </ol>`,
    progress: 1,
    priority: 3,
    startDate: 1563660120000,
    targetDate: 1565906520000,
    startDateUnix: 1563660120000,
    targetDateUnix: 1565906520000,
    tags: 'auth,general',
  },
  {
    id: 'd27599a6-ffca-4534-ba28-967626bcce86',
    starred: true,
    title: 'Finish this app six',
    content: `<ul>
    <li>lets finish</li>
    <li>this app</li>
    </ul>`,
    progress: 2,
    priority: 4,
    startDate: 1563660120000,
    targetDate: 1565388120000,
    startDateUnix: 1563660120000,
    targetDateUnix: 1565388120000,
    tags: 'app,general,software,test,example,editor,auth',
  },
];
