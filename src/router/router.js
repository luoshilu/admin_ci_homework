export const agentRouter = {
  path: '/agent',
  name: 'agent',
  redirect: '/agent/all',
  meta: {
    title: 'agent',
  },
  component: resolve => { require(['@/view/agent/agent.vue'], resolve) },
  children: [
    { path: ':type', component: resolve => { require(['@/view/agent/list.vue'], resolve) }, props: true },
  ],
}

export const routers = [
  agentRouter,
]
