const state = {
  list: [
    {
      uuid: "1",
      host_scheme: "https",
      host_username: "",
      host_domain: "upload.wikimedia.org",
      host_port: 80,
      image_path: "/wikipedia/commons/2/2f/Google_IO_logo.svg",
      alt: "Google IO",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "2",
      host_scheme: "https",
      host_username: "",
      host_domain: "butecotecnologico.com.br",
      host_port: 80,
      image_path:
        "/kubernetes-explicado/k8s-logo_hu0a955e4e84e5387169ab27ad00d4518c_24528_250x0_resize_q100_bgffffff_linear_2.jpg",
      alt: "Kubernetes",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
    {
      uuid: "3",
      host_scheme: "https",
      host_username: "",
      host_domain: "www.mundodocker.com.br",
      host_port: 80,
      image_path: "/wp-content/uploads/2015/06/docker_facebook_share.png",
      alt: "Docker",
      created_at: "",
      updated_at: "",
      deleted_at: "",
    },
  ],
};

const getters = {
  getById: (state, getters, rootState, rootGetters) => (uuid) =>
    rootGetters.getById(state.list, uuid),
  getImageHost: () => (img) => {
    let host = img.host_scheme + "://";
    if (img.host_username) {
      host += img.host_username + "@";
    }
    host += img.host_domain;
    if (img.host_port !== 80) {
      host += ":" + img.host_port;
    }
    return host;
  },
  getImageUrl: (state, getters) => (img) =>
    getters.getImageHost(img) + img.image_path,
};

export default {
  namespaced: true,
  state,
  getters,
};
