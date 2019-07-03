export const agentRouter = {
  path: '/agent',
  name: 'agent',
  meta: {
    title: 'agent',
  },
  component: resolve => { require(['@/view/agent/agent.vue'], resolve) },
  children: [
    { path: '', component: resolve => { require(['@/view/agent/list.vue'], resolve) } },
    { path: ':type', component: resolve => { require(['@/view/agent/list.vue'], resolve) } },
  ],
}

export const routers = [
  agentRouter,
]
