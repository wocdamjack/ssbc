
  <!-- <script src="https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"></script> -->
  <script>
  import Card from "../components/Card.svelte";
  import SupplierSelection from "../components/SupplierSelection.svelte";
  import Select from 'svelte-select';
  import fhirClient from 'fhirclient';
  import { onMount } from "svelte";
  import http from "../http";

  
  //const client = FHIR.client("https://r3.smarthealthit.org");
  

  fhirClient(req, res).ready()
        .then(client => client.request("Patient"))
        .then(res.json)
        .catch(res.json);

  let products = [];
  let product = {};
  const items = ['One', 'Two', 'Three']
  let buttonSaveIsLoading = false;
  $: buttonSaveClass =
    buttonSaveIsLoading === true
      ? "button is-success is-loading"
      : "button is-success";

  let modalIsVisible = false;
  $: modalClass = modalIsVisible === true ? "modal is-active" : "modal";

  onMount(async () => {
    products = getProviders();
  });

  async function getProviders() {
    // a simple use of "fetch"
    //"https://northwind.now.sh/api/products/?_expand=category&_expand=supplier"
    //const result = await fetch(
      //"http://localhost:3001/Practitioners"
      //);

//client.request("Patient").then(console.log).catch(console.error);
fhirClient(req, res).then
const result = client.request("Practitioner").then(console.log);//.catch(console.error);
    

    if (result.ok) return result.json();

    throw new Error(
      `🚨 Catastrofic failure 🚨 ${result.status} ${result.statusText}`
    );
  }

  function onItemClick(item) {
    product = item;
    openModal();
  }

  async function onDeleteClick(item) {
    product = item;
    if (confirm(`Delete "${product.name}"?`)) {
      await http.delete(`/products/${product.id}`);
      products = getProducts();
    }
  }

  function closeModal() {
    modalIsVisible = false;
  }

  function openModal() {
    modalIsVisible = true;
  }

  function onNewClick() {
    product = {
      name: "",
      description: ""
    };
    openModal();
  }

  async function save() {
    try {
      buttonSaveIsLoading = true;
      let result = await http({
        method: product.id ? "put" : "post",
        url: product.id ? `/products/${product.id}` : "/products",
        data: product
      });
      products = getProducts();
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      buttonSaveIsLoading = false;
    }
  }


  const handleSubmit = () => {
    console.log(name, speciality, zip)
  }
</script>

<svelte:head>
  <title>Providers</title>
</svelte:head>
<button class="is-large">Hello</button>
<Card title="providers">
  <div>

    {#await products}
      <progress class="progress is-small is-primary" max="100">15%</progress>
    {:then list}

<p>Use Cases
  1.	Search for Practitioner by demographics
  o	Name
  o	Specialty
  2.	Search for Practitioner within a region (city, state)
  o	Practitioner or specialty within a specified distance - 10 miles from patient home
  o	Show me every one of this specialty in the city
  3.	Search for Organization and facility by:
  o	Name
  o	Address
  4.	Search for Practitioner by organizational relationships
  o	Practitioner in a specific health organization (e.g. Baptist Health Organization)
  o	Practitioner in a specific clinic (e.g. West Clinic)
  </p>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="columns">   
      <div class="column">
       <Select placeholder='Name'  {items}>Name </Select>
     </div>  
     <div class="column">
       <Select placeholder='Speciality' {items}>Speciality </Select>
     </div>
     <div class="column">
       <Select placeholder='Zip' {items}>Area </Select>
     </div>
    </div>
    </form>



      <table class="table is-striped is-hoverable">
        <thead>
          <tr>
            <th>ResourceType</th>
            <th>Name</th>
            <th>Address</th>
            <th>Id</th> 
            <!--th width="100px">Actions</th -->
          </tr>
        </thead>
        <tbody>
          {#each list as item}
            <tr>
              <td>{item.resource.resourceType}</td>
              <td>{item.resource.name[0].family}, {item.resource.name[0].given}</td>              
              <td> ( {item.resource.address ? item.resource.address[0].use :''} )
                {item.resource.address ? item.resource.address[0].line:''},
                {item.resource.address ? item.resource.address[0].city:''},
                {item.resource.address ? item.resource.address[0].postalCode:''},
                {item.resource.address ? item.resource.address[0].country:''}
              </td>
              
              <td>{item.resource.id}</td>  
              <!--td>
                <a href="javascript:;" on:click={() => onItemClick(item)}>
                  <span class="icon is-small">
                    <i class="fas fa-edit" />
                  </span>
                </a>

                <a href="javascript:;" on:click={() => onDeleteClick(item)}>
                  <span class="icon is-small">
                    <i class="fas fa-trash" />
                  </span>
                </a>
              </td -->
            </tr>
          {/each}
        </tbody>
      </table>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}

  </div>
  <a
    href="javascript:;"
    slot="footer"
    class="card-footer-item"
    on:click={onNewClick}>
    New
  </a>
</Card>

<div class={modalClass}>
  <div class="modal-background" />
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{product.name}</p>
      <button class="delete" aria-label="close" on:click={closeModal} />
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder=""
            bind:value={product.name} />
        </div>
      </div>
      <div class="columns is-desktop">
        <div class="column field">
          <label class="label">Category</label>
          <div class="control">
            <!--CategorySelection bind:selected={Provider..categoryId} / -->
          </div>
        </div>
        <div class="column field">
          <label class="label">Supplier</label>
          <div class="control">
            <SupplierSelection bind:selected={product.supplierId} />
          </div>
        </div>
      </div>
      <div class="columns is-desktop">
        <div class="column field">
          <label class="label">Quantity Per Unit</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder=""
              bind:value={product.quantityPerUnit} />
          </div>
        </div>
        <div class="column field">
          <label class="label">Unit Price</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder=""
              bind:value={product.unitPrice} />
          </div>
        </div>
        <div class="column field">
          <label class="label">Unit in Stock</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder=""
              bind:value={product.unitsInStock} />
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">
          Discontinued 
          <input type="checkbox" bind:checked={product.discontinued} />
        </label>
      </div>

    </section>
    <footer class="modal-card-foot">
      <button class={buttonSaveClass} on:click={save}>Save changes</button>
      <button class="button" on:click={closeModal}>Cancel</button>
    </footer>
  </div>
</div>
