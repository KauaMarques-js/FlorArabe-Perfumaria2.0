# Desconto

Este arquivo explica como alterar ou desativar a campanha de inauguração no projeto.

## Arquivo principal

O controle da campanha está centralizado em:

- `src/config/campaign.ts`

## Estrutura do arquivo

```ts
export interface CampaignConfig {
  enabled: boolean;
  discountPercentage: number;
  buildVersion: string;
  title: string;
  message: string;
  badgeLabel: string;
}

export const CAMPAIGN: CampaignConfig = {
  enabled: true,
  discountPercentage: 20,
  buildVersion: process.env.NEXT_PUBLIC_CAMPAIGN_BUILD_VERSION ?? "1.0.0",
  title: "Inauguração Especial",
  message: "Aproveite 20% OFF em todos os perfumes da loja.",
  badgeLabel: "Economize 20%",
};
```

## Como aumentar o desconto

Altere apenas o valor de:

```ts
discountPercentage: 20,
```

Por exemplo:

```ts
discountPercentage: 25,
```

## Como remover o desconto

Para desativar a campanha globalmente, ajuste:

```ts
enabled: false,
```

Isso também desativa a exibição do banner de inauguração.

## Como reiniciar o banner após novo deploy

O banner usa uma versão de build armazenada em `localStorage`.

Para fazer o banner reaparecer para todos os usuários após um deploy, atualize:

```ts
buildVersion: "1.0.1",
```

Use um valor diferente sempre que quiser forçar a reapresentação do banner.

## Como alterar o texto do banner

Mude estes campos:

```ts
title: "Inauguração Especial",
message: "Aproveite 20% OFF em todos os perfumes da loja.",
badgeLabel: "Economize 20%",
```

## Exemplo pronto para copiar e colar

```ts
export interface CampaignConfig {
  enabled: boolean;
  discountPercentage: number;
  buildVersion: string;
  title: string;
  message: string;
  badgeLabel: string;
}

export const CAMPAIGN: CampaignConfig = {
  enabled: true,
  discountPercentage: 20,
  buildVersion: process.env.NEXT_PUBLIC_CAMPAIGN_BUILD_VERSION ?? "1.0.0",
  title: "Inauguração Especial",
  message: "Aproveite 20% OFF em todos os perfumes da loja.",
  badgeLabel: "Economize 20%",
};
```

## Observações

- A configuração é centralizada e afeta todos os produtos.
- Para descontos específicos por produto, use `promotion` em `src/data/products.ts`.
- Se preferir, mantenha o mesmo `buildVersion` enquanto não quiser reiniciar o banner.
